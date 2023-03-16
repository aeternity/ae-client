/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedPubkey } from './EncodedPubkey';
import type { RelativeTTL } from './RelativeTTL';
import type { UInt } from './UInt';
import type { UInt64 } from './UInt64';

export type OracleExtendTx = {
    fee: UInt;
    oracle_ttl: RelativeTTL;
    oracle_id: EncodedPubkey;
    nonce?: UInt64;
    ttl?: UInt64;
};

