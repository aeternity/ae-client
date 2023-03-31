import { createClient } from "../restClient";
import { getTransaction, getTransactionInfo } from "./transaction";

const testNetCl = createClient("testnet");
const mainNetCl = createClient("mainnet");

const th = "th_vBTqi9BxQPGAm9KxJPc4JMTTNXdyxwAhhfDfSYcmQP998hc1B";
test("GetTransaction", async () => {
  const t = await getTransaction(testNetCl, th);
  expect(t.hash).toBe(th);

  const tMainNet404 = await getTransaction(mainNetCl, th);
  expect(tMainNet404).toBeNull();
});

test("GetTransactionInfo", async () => {
  const ti = await getTransactionInfo(testNetCl, th);
  expect(ti.call_info.caller_id).toBe(
    "ak_2PahBfbkrmBFfbb4FGEVErP7mChFGPYFb9eGMARU514u5V3K52"
  );
});
