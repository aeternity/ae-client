import { createClient } from "../restClient";
import { getContractCode, getContractInfo } from "./contract";

const testNetCl = createClient("testnet");
const mainNetCl = createClient("mainnet");

const ct = "ct_2JwUTCnh8jWMahiM5oF3k8qqZEf6uFLyYccJCHVN6g5JW5UHu4";

test("GetContractInfo", async () => {
  const ci = await getContractInfo(testNetCl, ct);
  expect(ci?.id).toBe(ct);

  const ciMainNet404 = await getContractInfo(mainNetCl, ct);
  expect(ciMainNet404).toBeNull();
});

test("GetContractCode", async () => {
  const cc = await getContractCode(testNetCl, ct);
  expect(cc).not.toBeNull();

  const ccMainNet404 = await getContractCode(mainNetCl, ct);
  expect(ccMainNet404).toBeNull();
});
