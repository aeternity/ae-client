import { AccountPubKey, ContractAddr, ContractDataEnc } from "./basicTypes";
import { test, expect } from "@jest/globals";

test("Parse Invalid Primitives", () => {
  expect(AccountPubKey.safeParse("ak_123").success).toBeFalsy();
  expect(ContractAddr.safeParse("ct_123").success).toBeFalsy();
  expect(ContractDataEnc.safeParse("cb_123").success).toBeFalsy();
});
