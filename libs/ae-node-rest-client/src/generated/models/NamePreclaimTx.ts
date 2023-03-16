/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedPubkey } from './EncodedPubkey';
import type { EncodedValue } from './EncodedValue';
import type { UInt } from './UInt';
import type { UInt64 } from './UInt64';

export type NamePreclaimTx = {
    commitment_id: EncodedValue;
    fee: UInt;
    ttl?: UInt64;
    account_id: EncodedPubkey;
    nonce?: UInt64;
};

