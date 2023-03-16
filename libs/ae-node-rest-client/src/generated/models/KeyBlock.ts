/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedByteArray } from './EncodedByteArray';
import type { EncodedHash } from './EncodedHash';
import type { EncodedPubkey } from './EncodedPubkey';
import type { Pow } from './Pow';
import type { UInt32 } from './UInt32';
import type { UInt64 } from './UInt64';

export type KeyBlock = {
    hash: EncodedHash;
    height: UInt64;
    prev_hash: EncodedHash;
    prev_key_hash: EncodedHash;
    state_hash: EncodedHash;
    miner: EncodedPubkey;
    beneficiary: EncodedPubkey;
    target: UInt32;
    pow?: Pow;
    nonce?: UInt64;
    time: UInt64;
    version: UInt32;
    info: EncodedByteArray;
};

