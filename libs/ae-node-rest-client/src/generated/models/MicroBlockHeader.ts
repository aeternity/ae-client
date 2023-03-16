/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedHash } from './EncodedHash';
import type { EncodedValue } from './EncodedValue';
import type { UInt32 } from './UInt32';
import type { UInt64 } from './UInt64';

export type MicroBlockHeader = {
    hash: EncodedHash;
    height: UInt64;
    pof_hash: EncodedHash;
    prev_hash: EncodedHash;
    prev_key_hash: EncodedHash;
    state_hash: EncodedHash;
    txs_hash: EncodedHash;
    signature: EncodedValue;
    time: UInt64;
    version: UInt32;
};

