import { AccountPubKey, ContractAddr, ContractByteArray } from "./basicTypes";

test("Parse Invalid Primitives", () => {
  expect(AccountPubKey.safeParse("ak_123").success).toBeFalsy();
  expect(ContractAddr.safeParse("ct_123").success).toBeFalsy();
  expect(ContractByteArray.safeParse("cb_123").success).toBeFalsy();
});
