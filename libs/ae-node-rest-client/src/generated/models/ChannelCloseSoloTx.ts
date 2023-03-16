/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedByteArray } from './EncodedByteArray';
import type { EncodedPubkey } from './EncodedPubkey';
import type { UInt } from './UInt';
import type { UInt64 } from './UInt64';

export type ChannelCloseSoloTx = {
    channel_id: EncodedPubkey;
    from_id: EncodedPubkey;
    payload: EncodedByteArray;
    ttl?: UInt64;
    fee: UInt;
    nonce?: UInt64;
    poi: EncodedByteArray;
};

