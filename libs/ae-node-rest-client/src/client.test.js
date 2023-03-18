import { AeNodeClient } from "./client";

const client = new AeNodeClient("testnet");

const ak = "ak_2J83n6HbGu8zjFj3oikZEQQfHSe4QkS1cX2MWgPWYL1yt479CU";

test("NodeStatus", async () => {
  const status = await client.status();
  // console.log("status", status);
  expect(status.network_id).toBe("ae_uat");
});
test("getAccountInfo", async () => {
  const account = await client.getAccountInfo(ak);
  // console.log("account", account);
  expect(account?.id).toBe(ak);
});

test("getNextNonce", async () => {
  const nonce = await client.getNextNonce(ak);
  // console.log("returned nonce", nonce);
  expect(nonce).toBeGreaterThan(0n);
});
