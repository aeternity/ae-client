/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedPubkey } from './EncodedPubkey';
import type { TTL } from './TTL';
import type { UInt } from './UInt';
import type { UInt16 } from './UInt16';
import type { UInt64 } from './UInt64';

export type OracleRegisterTx = {
    query_format: string;
    response_format: string;
    query_fee: UInt;
    oracle_ttl: TTL;
    account_id: EncodedPubkey;
    nonce?: UInt64;
    fee: UInt;
    ttl?: UInt64;
    abi_version?: UInt16;
};

