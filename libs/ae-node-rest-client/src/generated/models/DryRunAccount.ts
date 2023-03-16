/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedPubkey } from './EncodedPubkey';
import type { UInt } from './UInt';

export type DryRunAccount = {
    pub_key: EncodedPubkey;
    amount: UInt;
};

