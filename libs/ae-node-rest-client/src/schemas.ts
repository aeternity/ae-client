import { z } from "zod";
import aecalldata from "@aeternity/aepp-calldata";

// @ts-ignore
const decoder = new aecalldata.FateApiEncoder();

function aecalldataValid(s: string) {
  try {
    decoder.decode(s as any);
    return true;
  } catch (FormatError) {
    return false;
  }
}

export const ContractDataEnc = z.custom<`cb_${string}`>(
  (v) => typeof v === "string" && v.startsWith("cb_") && aecalldataValid(v)
);
export type ContractDataEnc = z.infer<typeof ContractDataEnc>;

export const AccountPubKey = z.custom<`ak_${string}`>(
  (v) => typeof v === "string" && v.startsWith("ak_") && aecalldataValid(v)
);
export type AccountPubKey = z.infer<typeof AccountPubKey>;

export const ContractAddr = z.custom<`ct_${string}`>(
  (v) => typeof v === "string" && v.startsWith("ct_") && aecalldataValid(v)
);
export type ContractAddr = z.infer<typeof ContractAddr>;

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

export const NodeStatus = z.object({
  network_id: z.string(),
  node_version: z.string(),
});
