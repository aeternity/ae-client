/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Delegates } from './Delegates';
import type { EncodedHash } from './EncodedHash';
import type { EncodedPubkey } from './EncodedPubkey';
import type { UInt } from './UInt';
import type { UInt64 } from './UInt64';

export type ChannelCreateTx = {
    initiator_id: EncodedPubkey;
    initiator_amount: UInt;
    responder_id: EncodedPubkey;
    responder_amount: UInt;
    channel_reserve: UInt;
    lock_period: UInt64;
    ttl?: UInt64;
    fee: UInt;
    nonce?: UInt64;
    state_hash: EncodedHash;
    delegate_ids?: Delegates;
};

