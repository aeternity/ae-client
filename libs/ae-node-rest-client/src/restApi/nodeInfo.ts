import { AeNodeRestClient } from "../restClient";
import { z } from "zod";

export const NodeStatus = z.object({
  network_id: z.string(),
  node_version: z.string(),
});
export const getNodeStatus = async (client: AeNodeRestClient) => {
  const resp = await client.call("GET", "/status");
  return NodeStatus.parse(resp.data);
};
