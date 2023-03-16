/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedPubkey } from './EncodedPubkey';
import type { SignedTx } from './SignedTx';
import type { UInt } from './UInt';
import type { UInt64 } from './UInt64';

export type PayingForTx = {
    payer_id: EncodedPubkey;
    fee: UInt;
    nonce?: UInt64;
    tx: SignedTx;
};

