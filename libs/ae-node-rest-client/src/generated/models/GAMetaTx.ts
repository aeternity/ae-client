/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedByteArray } from './EncodedByteArray';
import type { EncodedPubkey } from './EncodedPubkey';
import type { SignedTx } from './SignedTx';
import type { UInt } from './UInt';
import type { UInt16 } from './UInt16';
import type { UInt64 } from './UInt64';

export type GAMetaTx = {
    ga_id: EncodedPubkey;
    abi_version: UInt16;
    gas: UInt64;
    gas_price: UInt;
    fee: UInt;
    ttl?: UInt64;
    auth_data: EncodedByteArray;
    tx: SignedTx;
};

