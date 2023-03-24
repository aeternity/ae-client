import { createClient } from "../restClient";
import { getTransaction } from "./transaction";

const testNetCl = createClient("testnet");
const mainNetCl = createClient("mainnet");

const th = "th_vBTqi9BxQPGAm9KxJPc4JMTTNXdyxwAhhfDfSYcmQP998hc1B";
test("GetTransaction", async () => {
  const t = await getTransaction(testNetCl, th);
  expect(t.hash).toBe(th);

  const tMainNet404 = await getTransaction(mainNetCl, th);
  expect(tMainNet404).toBeNull();
});
