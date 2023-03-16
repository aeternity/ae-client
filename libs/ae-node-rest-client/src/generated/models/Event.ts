/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedByteArray } from './EncodedByteArray';
import type { EncodedPubkey } from './EncodedPubkey';
import type { UInt } from './UInt';

export type Event = {
    address: EncodedPubkey;
    /**
     * Event topics
     */
    topics: Array<UInt>;
    data: EncodedByteArray;
};

