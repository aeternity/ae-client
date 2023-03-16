/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedPubkey } from './EncodedPubkey';
import type { UInt } from './UInt';
import type { UInt64 } from './UInt64';

export type NameClaimTx = {
    name: string;
    name_salt: UInt;
    name_fee?: UInt;
    fee: UInt;
    ttl?: UInt64;
    account_id: EncodedPubkey;
    nonce?: UInt64;
};

