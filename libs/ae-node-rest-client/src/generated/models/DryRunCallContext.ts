/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedByteArray } from './EncodedByteArray';
import type { EncodedHash } from './EncodedHash';

export type DryRunCallContext = {
    tx?: EncodedByteArray;
    tx_hash?: EncodedHash;
    /**
     * This call will have effects on the next call in this dry-run (or not)
     */
    stateful?: boolean;
};

