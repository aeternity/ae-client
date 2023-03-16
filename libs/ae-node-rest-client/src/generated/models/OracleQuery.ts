/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedPubkey } from './EncodedPubkey';
import type { EncodedValue } from './EncodedValue';
import type { TTL } from './TTL';
import type { UInt } from './UInt';
import type { UInt64 } from './UInt64';

export type OracleQuery = {
    id: EncodedValue;
    sender_id: EncodedPubkey;
    sender_nonce: UInt64;
    oracle_id: EncodedPubkey;
    query: string;
    response: string;
    ttl: UInt64;
    response_ttl: TTL;
    fee: UInt;
};

