import { AeNodeRestClient } from "../restClient";
import { z } from "zod";

export const NodeStatus = z.object({
  difficulty: z.coerce.bigint(),
  genesis_key_block_hash: z.string(),
  listening: z.boolean(),
  network_id: z.string(),
  node_revision: z.string(),
  node_version: z.string(),
  peer_connections: z.object({
    inbound: z.coerce.bigint(),
    outbound: z.coerce.bigint(),
  }),
  peer_count: z.coerce.bigint(),
  peer_pubkey: z.string(),
  pending_transactions_count: z.coerce.bigint(),
  protocols: z.array(
    z.object({
      version: z.coerce.bigint(),
      effective_at_height: z.coerce.bigint(),
    })
  ),
  solutions: z.coerce.bigint(),
  sync_progress: z.number(),
  syncing: z.boolean(),
  top_block_height: z.coerce.bigint(),
  top_key_block_hash: z.string(),
});
export const getNodeStatus = async (client: AeNodeRestClient) => {
  const resp = await client.call("GET", "/status");
  return NodeStatus.parse(resp.data);
};
