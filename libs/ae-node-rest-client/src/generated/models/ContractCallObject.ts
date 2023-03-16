/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedByteArray } from './EncodedByteArray';
import type { EncodedPubkey } from './EncodedPubkey';
import type { Event } from './Event';
import type { UInt } from './UInt';
import type { UInt64 } from './UInt64';

export type ContractCallObject = {
    caller_id: EncodedPubkey;
    caller_nonce: UInt64;
    height: UInt64;
    contract_id: EncodedPubkey;
    gas_price: UInt;
    gas_used: UInt64;
    log: Array<Event>;
    return_value: EncodedByteArray;
    /**
     * The status of the call 'ok | error | revert'.
     */
    return_type: string;
};

