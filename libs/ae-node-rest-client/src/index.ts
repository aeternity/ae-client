import { z } from "zod";
import axios, { AxiosResponse, Method } from "axios";
import { AccountInfo, AccountPubKey } from "./schemas.js";

export const AeNodeRootUrl = z.custom<
  `http://${string}/v3` | `https://${string}/v3`
>(
  (v) =>
    typeof v === "string" &&
    (v.startsWith("http://") || v.startsWith("https://")) &&
    v.endsWith("/v3")
);
export type AeNodeRootUrl = z.infer<typeof AeNodeRootUrl>;

function throwUnexpectedError(resp: AxiosResponse<any, any>) {
  console.error(resp.data);
  throw new Error(
    `Unexpected status code ${resp.status} from ${resp.config.url}`
  );
}

function parseAccountResponse(resp: AxiosResponse<any, any>) {
  if (resp.status === 404) {
    return null;
  } else if (resp.status == 200) {
    // console.log(resp.data);
    return AccountInfo.parse(resp.data);
  } else {
    return throwUnexpectedError(resp);
  }
}

async function aeAxiosRequest(url: string, method: Method, data?: object) {
  const resp: AxiosResponse = await axios
    .request({
      method,
      url,
      params: { "int-as-string": true, ...data },
    })
    .catch((err) => {
      if (err.response) {
        // Request made and server responded
        console.debug(
          `Request made and server responded with code: ${err.response.status} data:`,
          err.response.data
        );
        return err.response;
      } else if (err.request) {
        // The request was made but no response was received
        console.error(url);
        console.error(
          "Request was made but no response from server: ",
          err.request
        );
        throw new Error(err.message);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error", err.message);
        throw new Error(err.message);
      }
    });
  console.warn(resp.config.url, resp.config.params);
  return resp;
}

function parseNextNonce(resp: AxiosResponse<any, any>) {
  if (resp.status === 200) {
    const r = z.object({ next_nonce: z.coerce.bigint() }).parse(resp.data);
    return r.next_nonce;
  } else if (resp.status === 404) {
    return null;
  } else {
    return throwUnexpectedError(resp);
  }
}

export class AeNodeClient {
  rootUrl: AeNodeRootUrl;
  constructor(rootUrl: "mainnet" | "testnet" | AeNodeRootUrl) {
    if (rootUrl === "mainnet") {
      this.rootUrl = "https://mainnet.aeternity.io/v3";
    } else if (rootUrl === "testnet") {
      this.rootUrl = "https://testnet.aeternity.io/v3";
    } else {
      this.rootUrl = AeNodeRootUrl.parse(rootUrl);
    }
  }

  async call(method: Method, path: `/${string}`, data?: object) {
    const url = `${this.rootUrl}${path}`;
    return await aeAxiosRequest(url, method, data);
  }

  async getAccountInfo(pubKey: AccountPubKey) {
    const resp = await this.call("GET", `/accounts/${pubKey}`);
    return parseAccountResponse(resp);
  }
  async getNextNonce(pubKey: AccountPubKey, strategy?: "max" | "continuity") {
    const data = { strategy: strategy ? strategy : "max" };
    const resp = await this.call("GET", `/accounts/${pubKey}/next-nonce`, data);
    return parseNextNonce(resp);
  }
}
