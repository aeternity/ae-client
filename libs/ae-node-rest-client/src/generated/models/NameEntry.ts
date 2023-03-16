/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedPubkey } from './EncodedPubkey';
import type { EncodedValue } from './EncodedValue';
import type { NamePointer } from './NamePointer';
import type { UInt64 } from './UInt64';

export type NameEntry = {
    id: EncodedValue;
    owner?: EncodedPubkey;
    ttl: UInt64;
    pointers: Array<NamePointer>;
};

