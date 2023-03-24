import { AeNodeRestClient } from "../restClient";
import { AccountPubKey, ContractAddr } from "../basicTypes";
import { z } from "zod";
import { parseNullableResponse } from "../axiosUtils";

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
  return parseNullableResponse(resp, AccountInfo);
};

const NextNonceResp = z.object({ next_nonce: z.coerce.bigint() });
export const getNextNonce = async (
  client: AeNodeRestClient,
  pubKey: AccountPubKey,
  strategy?: "max" | "continuity"
) => {
  const qs = { strategy: strategy ? strategy : "max" };
  const resp = await client.call("GET", `/accounts/${pubKey}/next-nonce`, qs);
  const nonceResp = parseNullableResponse(resp, NextNonceResp);
  return nonceResp && nonceResp.next_nonce;
};
