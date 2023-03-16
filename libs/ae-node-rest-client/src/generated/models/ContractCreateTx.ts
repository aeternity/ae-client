/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedByteArray } from './EncodedByteArray';
import type { EncodedPubkey } from './EncodedPubkey';
import type { UInt } from './UInt';
import type { UInt16 } from './UInt16';
import type { UInt64 } from './UInt64';

export type ContractCreateTx = {
    owner_id: EncodedPubkey;
    nonce?: UInt64;
    code: EncodedByteArray;
    vm_version: UInt16;
    abi_version: UInt16;
    deposit: UInt;
    amount: UInt;
    gas: UInt64;
    gas_price: UInt;
    fee: UInt;
    ttl?: UInt64;
    call_data: EncodedByteArray;
};

