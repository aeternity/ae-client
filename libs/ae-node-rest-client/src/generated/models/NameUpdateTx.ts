/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedPubkey } from './EncodedPubkey';
import type { EncodedValue } from './EncodedValue';
import type { NamePointer } from './NamePointer';
import type { UInt } from './UInt';
import type { UInt64 } from './UInt64';

export type NameUpdateTx = {
    name_id: EncodedValue;
    name_ttl: UInt64;
    pointers: Array<NamePointer>;
    client_ttl: UInt64;
    fee: UInt;
    ttl?: UInt64;
    account_id: EncodedPubkey;
    nonce?: UInt64;
};

