import { AeNodeRestClient } from "../restClient";
import { AccountPubKey, ContractAddr } from "../basicTypes";
import { AxiosResponse } from "axios";
import { z } from "zod";
import { throwUnexpectedResponseError } from "../axiosUtils";

export const parseAccountResponse = <T extends z.ZodTypeAny>(
  resp: AxiosResponse,
  decoder: T
) => {
  if (resp.status === 200) {
    return decoder.parse(resp.data);
  } else if (resp.status === 404) {
    return null;
  } else {
    return throwUnexpectedResponseError(resp);
  }
};
export const AccountInfo = z.object({
  id: AccountPubKey,
  balance: z.coerce.bigint(),
  kind: z.union([z.literal("basic"), z.literal("generalized")]),
  nonce: z.coerce.bigint(),
  payable: z.boolean(),
  auth_fun: z.string().optional(),
  contract_id: ContractAddr.optional(),
});
export type AccountInfo = z.infer<typeof AccountInfo>;

export const getAccountInfo = async (
  client: AeNodeRestClient,
  pubKey: AccountPubKey
): Promise<AccountInfo | null> => {
  const resp = await client.call("GET", `/accounts/${pubKey}`);
  return parseAccountResponse(resp, AccountInfo);
};

const NextNonceResp = z.object({ next_nonce: z.coerce.bigint() });
export const getNextNonce = async (
  client: AeNodeRestClient,
  pubKey: AccountPubKey,
  strategy?: "max" | "continuity"
) => {
  const qs = { strategy: strategy ? strategy : "max" };
  const resp = await client.call("GET", `/accounts/${pubKey}/next-nonce`, qs);
  const nonceResp = parseAccountResponse(resp, NextNonceResp);
  return nonceResp && nonceResp.next_nonce;
};
