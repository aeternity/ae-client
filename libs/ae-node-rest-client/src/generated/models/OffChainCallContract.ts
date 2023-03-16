/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedByteArray } from './EncodedByteArray';
import type { EncodedPubkey } from './EncodedPubkey';
import type { OffChainUpdate } from './OffChainUpdate';
import type { UInt } from './UInt';
import type { UInt16 } from './UInt16';
import type { UInt64 } from './UInt64';

export type OffChainCallContract = (OffChainUpdate & {
    caller: EncodedPubkey;
    contract: EncodedPubkey;
    abi_version: UInt16;
    amount: UInt;
    gas: UInt64;
    gas_price: UInt;
    call_data: EncodedByteArray;
});

