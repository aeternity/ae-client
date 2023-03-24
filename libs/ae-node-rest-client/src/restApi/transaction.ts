import { AeNodeRestClient } from "../restClient";
import { z } from "zod";
import {
  AccountPubKey,
  ContractAddr,
  ContractDataEnc,
  MicroBlockHash,
  Signature,
  TransactionHash,
} from "../basicTypes";
import { parseNullableResponse } from "../axiosUtils";

export const Transaction = z
  .object({
    abi_version: z.literal("3"),
    amount: z.coerce.bigint(),
    call_data: ContractDataEnc,
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
  id: string
): Promise<TxResponse> {
  const resp = await client.call("GET", `/transactions/${id}`);
  return parseNullableResponse(resp, TxResponse);
}
