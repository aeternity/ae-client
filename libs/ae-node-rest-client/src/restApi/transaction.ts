import { AeNodeRestClient } from "../restClient";
import { z } from "zod";
import {
  AccountPubKey,
  ContractAddr,
  ContractByteArray,
  MicroBlockHash,
  Signature,
  TransactionHash,
} from "../basicTypes";
import { parseNullableResponse } from "../axiosUtils";

export const Transaction = z
  .object({
    abi_version: z.literal("3"),
    amount: z.coerce.bigint(),
    call_data: ContractByteArray,
    caller_id: AccountPubKey,
    contract_id: ContractAddr,
    fee: z.coerce.bigint(),
    gas: z.coerce.bigint(),
    gas_price: z.coerce.bigint(),
    nonce: z.coerce.bigint(),
    type: z.literal("ContractCallTx"),
    version: z.literal("1"),
  })
  .strict();
export type Transaction = z.infer<typeof Transaction>;

export const TxResponse = z
  .object({
    block_hash: MicroBlockHash,
    block_height: z.coerce.bigint(),
    hash: TransactionHash,
    signatures: z.array(Signature),
    tx: Transaction,
  })
  .strict();
export type TxResponse = z.infer<typeof TxResponse>;

export async function getTransaction(
  client: AeNodeRestClient,
  id: TransactionHash
): Promise<TxResponse | null> {
  const resp = await client.call("GET", `/transactions/${id}`);
  return parseNullableResponse(resp, TxResponse);
}

export const ContractCallObj = z.object({
  caller_id: AccountPubKey,
  caller_nonce: z.coerce.bigint(),
  contract_id: ContractAddr,
  gas_price: z.coerce.bigint(),
  gas_used: z.coerce.bigint(),
  height: z.coerce.bigint(),
  log: z.array(z.string()),
  return_type: z.string(),
  return_value: ContractByteArray,
});
export const GAInfoObj = z.object({
  caller_id: AccountPubKey,
  height: z.coerce.bigint(),
  gas_price: z.coerce.bigint(),
  gas_used: z.coerce.bigint(),
  return_value: ContractByteArray,
  return_type: z.string(),
  inner_obj: z.object({
    call_info: ContractCallObj,
  }),
});
export const TxInfoResponse = z.object({
  call_info: ContractCallObj,
});

export async function getTransactionInfo(client: AeNodeRestClient, id: string) {
  const resp = await client.call("GET", `/transactions/${id}/info`);
  return parseNullableResponse(resp, TxInfoResponse);
}
