/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedHash } from './EncodedHash';
import type { EncodedPubkey } from './EncodedPubkey';
import type { UInt } from './UInt';
import type { UInt64 } from './UInt64';

export type ChannelDepositTx = {
    channel_id: EncodedPubkey;
    from_id: EncodedPubkey;
    amount: UInt;
    ttl?: UInt64;
    fee: UInt;
    nonce: UInt64;
    state_hash: EncodedHash;
    round: UInt64;
};

