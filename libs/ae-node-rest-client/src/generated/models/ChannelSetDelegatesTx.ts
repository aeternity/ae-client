/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedByteArray } from './EncodedByteArray';
import type { EncodedPubkey } from './EncodedPubkey';
import type { UInt } from './UInt';
import type { UInt64 } from './UInt64';

export type ChannelSetDelegatesTx = {
    channel_id: EncodedPubkey;
    from_id: EncodedPubkey;
    initiator_delegate_ids: Array<EncodedPubkey>;
    responder_delegate_ids: Array<EncodedPubkey>;
    state_hash: EncodedPubkey;
    round: UInt64;
    payload: EncodedByteArray;
    ttl?: UInt64;
    fee: UInt;
    nonce?: UInt64;
};

