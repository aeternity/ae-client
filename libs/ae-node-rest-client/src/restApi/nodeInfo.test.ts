import { getNodeStatus } from "./nodeInfo";
import { createClient } from "../restClient";
import { expect, test } from "@jest/globals";

test("NodeStatus", async () => {
  const mainNetByUrlCl = createClient("https://mainnet.aeternity.io/v3");
  const mainNetByUrlStatus = await getNodeStatus(mainNetByUrlCl);
  expect(mainNetByUrlStatus.network_id).toBe("ae_mainnet");

  const mainNetCl = createClient("mainnet");
  const mainNetStatus = await getNodeStatus(mainNetCl);
  expect(mainNetStatus.network_id).toBe("ae_mainnet");

  const testNetCl = createClient("testnet");
  const testNetStatus = await getNodeStatus(testNetCl);
  expect(testNetStatus.network_id).toBe("ae_uat");
});
