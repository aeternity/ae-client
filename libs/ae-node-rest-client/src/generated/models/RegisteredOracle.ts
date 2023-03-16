/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedPubkey } from './EncodedPubkey';
import type { UInt } from './UInt';
import type { UInt16 } from './UInt16';
import type { UInt64 } from './UInt64';

export type RegisteredOracle = {
    id: EncodedPubkey;
    query_format: string;
    response_format: string;
    query_fee: UInt;
    ttl: UInt64;
    abi_version: UInt16;
};

