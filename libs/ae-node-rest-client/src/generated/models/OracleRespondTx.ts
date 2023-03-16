/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedPubkey } from './EncodedPubkey';
import type { EncodedValue } from './EncodedValue';
import type { RelativeTTL } from './RelativeTTL';
import type { UInt } from './UInt';
import type { UInt64 } from './UInt64';

export type OracleRespondTx = {
    query_id: EncodedValue;
    response: string;
    response_ttl: RelativeTTL;
    fee: UInt;
    ttl?: UInt64;
    oracle_id: EncodedPubkey;
    nonce?: UInt64;
};

