/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedByteArray } from './EncodedByteArray';
import type { EncodedPubkey } from './EncodedPubkey';
import type { UInt } from './UInt';
import type { UInt64 } from './UInt64';

export type SpendTx = {
    recipient_id: EncodedPubkey;
    amount: UInt;
    fee: UInt;
    ttl?: UInt64;
    sender_id: EncodedPubkey;
    nonce?: UInt64;
    payload: EncodedByteArray;
};

