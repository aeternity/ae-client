import { AccountPubKey, ContractAddr, ContractByteArray } from "../basicTypes";
import { AeNodeRestClient } from "../restClient";
import { z } from "zod";
import { parseNullableResponse } from "../axiosUtils";

const ContractInfo = z.object({
  abi_version: z.literal("3"),
  active: z.boolean(),
  deposit: z.coerce.bigint(),
  id: ContractAddr,
  owner_id: AccountPubKey,
  referrer_ids: z.array(AccountPubKey),
  vm_version: z.coerce.bigint(),
});
export type ContractInfo = z.infer<typeof ContractInfo>;

export const getContractInfo = async (
  client: AeNodeRestClient,
  contractId: ContractAddr
): Promise<ContractInfo | null> => {
  const resp = await client.call("GET", `/contracts/${contractId}`);
  return parseNullableResponse(resp, ContractInfo);
};

const ContractCodeResp = z.object({
  bytecode: ContractByteArray,
});

export const getContractCode = async (
  client: AeNodeRestClient,
  contractId: ContractAddr
): Promise<ContractByteArray | null> => {
  const resp = await client.call("GET", `/contracts/${contractId}/code`);
  const bytecode = parseNullableResponse(resp, ContractCodeResp)?.bytecode;
  return bytecode || null;
};
