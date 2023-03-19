import { z } from "zod";
import { AxiosResponse, Method } from "axios";
import { aeAxiosRequest } from "./axiosUtils";

export const AeNodeRootUrl = z.custom<
  `http://${string}/v3` | `https://${string}/v3`
>(
  (v) =>
    typeof v === "string" &&
    (v.startsWith("http://") || v.startsWith("https://")) &&
    v.endsWith("/v3")
);
export type AeNodeRootUrl = z.infer<typeof AeNodeRootUrl>;

const validateRootUrl = (rootUrl: "mainnet" | "testnet" | AeNodeRootUrl) => {
  if (rootUrl === "mainnet") {
    return "https://mainnet.aeternity.io/v3";
  } else if (rootUrl === "testnet") {
    return "https://testnet.aeternity.io/v3";
  } else {
    return AeNodeRootUrl.parse(rootUrl);
  }
};

export interface AeNodeRestClient {
  call: (
    method: Method,
    path: `/${string}`,
    data?: object
  ) => Promise<AxiosResponse>;
}

export const createClient = (
  rootUrl: "mainnet" | "testnet" | AeNodeRootUrl
): AeNodeRestClient => {
  let rUrl = validateRootUrl(rootUrl);
  return {
    call: async (method: Method, path: `/${string}`, data?: object) => {
      const url = `${rUrl}${path}`;
      return aeAxiosRequest(url, method, data);
    },
  };
};
