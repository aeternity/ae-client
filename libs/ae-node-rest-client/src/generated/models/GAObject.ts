/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedByteArray } from './EncodedByteArray';
import type { EncodedPubkey } from './EncodedPubkey';
import type { TxInfoObject } from './TxInfoObject';
import type { UInt } from './UInt';
import type { UInt64 } from './UInt64';

export type GAObject = {
    caller_id: EncodedPubkey;
    height: UInt64;
    gas_price: UInt;
    gas_used: UInt64;
    return_value: EncodedByteArray;
    /**
     * The status of the call 'ok | error'.
     */
    return_type: string;
    inner_object?: TxInfoObject;
};

