/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedByteArray } from './EncodedByteArray';
import type { EncodedHash } from './EncodedHash';
import type { EncodedPubkey } from './EncodedPubkey';
import type { OffChainUpdate } from './OffChainUpdate';
import type { UInt } from './UInt';
import type { UInt64 } from './UInt64';

export type ChannelForceProgressTx = {
    channel_id: EncodedPubkey;
    from_id: EncodedPubkey;
    payload: EncodedByteArray;
    round: UInt64;
    update: OffChainUpdate;
    state_hash: EncodedHash;
    ttl?: UInt64;
    fee: UInt;
    nonce?: UInt64;
    offchain_trees?: EncodedByteArray;
};

