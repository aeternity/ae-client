/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Delegates } from './Delegates';
import type { EncodedHash } from './EncodedHash';
import type { EncodedPubkey } from './EncodedPubkey';
import type { UInt } from './UInt';
import type { UInt64 } from './UInt64';

export type Channel = {
    id: EncodedPubkey;
    initiator_id: EncodedPubkey;
    responder_id: EncodedPubkey;
    channel_amount: UInt;
    initiator_amount: UInt;
    responder_amount: UInt;
    channel_reserve: UInt;
    delegate_ids: Delegates;
    state_hash: EncodedHash;
    round: UInt64;
    solo_round: UInt64;
    lock_period: UInt64;
    locked_until: UInt64;
};

