import { z } from "zod";
import { Method } from "axios";
import { AccountPubKey, NodeStatus } from "./schemas";
import {
  aeAxiosRequest,
  parseAccountResponse,
  parseNextNonce,
} from "./axiosUtils";

export const AeNodeRootUrl = z.custom<
  `http://${string}/v3` | `https://${string}/v3`
>(
  (v) =>
    typeof v === "string" &&
    (v.startsWith("http://") || v.startsWith("https://")) &&
    v.endsWith("/v3")
);
export type AeNodeRootUrl = z.infer<typeof AeNodeRootUrl>;

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

  async status() {
    const resp = await this.call("GET", "/status");
    return NodeStatus.parse(resp.data);
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
