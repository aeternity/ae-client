import { z } from "zod";
import aecalldata from "@aeternity/aepp-calldata";

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

export const MicroBlockHash = z.custom<`mh_${string}`>(
  (v) => typeof v === "string" && v.startsWith("mh_") && aecalldataValid(v)
);
export type MicroBlockHash = z.infer<typeof MicroBlockHash>;

export const TransactionHash = z.custom<`th_${string}`>(
  (v) => typeof v === "string" && v.startsWith("th_") && aecalldataValid(v)
);

export const Signature = z.custom<`sg_${string}`>(
  (v) => typeof v === "string" && v.startsWith("sg_") && aecalldataValid(v)
);
