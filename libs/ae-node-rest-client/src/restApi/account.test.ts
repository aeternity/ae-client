import { getAccountInfo, getNextNonce } from "./account";
import { createClient } from "../restClient";
import { expect, test } from "@jest/globals";

const testNetCl = createClient("testnet");
const mainNetCl = createClient("mainnet");

const ak = "ak_2J83n6HbGu8zjFj3oikZEQQfHSe4QkS1cX2MWgPWYL1yt479CU";

test("InvalidAccount", async () => {
  const account = getAccountInfo(mainNetCl, "ak_123");
  await expect(account).rejects.toThrow(
    "Unexpected status code 400 from https://mainnet.aeternity.io/v3/accounts/ak_123"
  );
});
test("AccountNotFound", async () => {
  const account = await getAccountInfo(mainNetCl, ak);
  expect(account).toBeNull();
});
test("getAccountInfo", async () => {
  const account = await getAccountInfo(testNetCl, ak);
  // console.log("account", account);
  expect(account?.id).toBe(ak);
});

test("getNextNonce", async () => {
  // console.log("returned nonce", nonce);
  expect(await getNextNonce(testNetCl, ak)).toBeGreaterThan(0n);
  expect(await getNextNonce(testNetCl, ak, "continuity")).toBeGreaterThan(0n);
});