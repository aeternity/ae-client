/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedPubkey } from './EncodedPubkey';
import type { UInt } from './UInt';
import type { UInt64 } from './UInt64';

export type ChannelCloseMutualTx = {
    channel_id: EncodedPubkey;
    from_id: EncodedPubkey;
    initiator_amount_final: UInt;
    responder_amount_final: UInt;
    ttl?: UInt64;
    fee: UInt64;
    nonce: UInt64;
};

