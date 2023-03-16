/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedPubkey } from './EncodedPubkey';
import type { OffChainUpdate } from './OffChainUpdate';
import type { UInt } from './UInt';

export type OffChainTransfer = (OffChainUpdate & {
    from: EncodedPubkey;
    to: EncodedPubkey;
    amount: UInt;
});

