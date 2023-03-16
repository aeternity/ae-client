/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedPubkey } from './EncodedPubkey';
import type { RelativeTTL } from './RelativeTTL';
import type { TTL } from './TTL';
import type { UInt } from './UInt';
import type { UInt64 } from './UInt64';

export type OracleQueryTx = {
    oracle_id: EncodedPubkey;
    query: string;
    query_fee: UInt;
    query_ttl: TTL;
    response_ttl: RelativeTTL;
    fee: UInt;
    ttl?: UInt64;
    sender_id: EncodedPubkey;
    nonce?: UInt64;
};

