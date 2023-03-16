/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedByteArray } from './EncodedByteArray';
import type { EncodedPubkey } from './EncodedPubkey';
import type { UInt } from './UInt';
import type { UInt16 } from './UInt16';
import type { UInt64 } from './UInt64';

export type ContractCallTx = {
    caller_id: EncodedPubkey;
    nonce?: UInt64;
    contract_id: EncodedPubkey;
    abi_version: UInt16;
    fee: UInt;
    ttl?: UInt64;
    amount: UInt;
    gas: UInt64;
    gas_price: UInt;
    call_data: EncodedByteArray;
};

