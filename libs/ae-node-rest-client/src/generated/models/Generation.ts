/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedPubkey } from './EncodedPubkey';
import type { KeyBlock } from './KeyBlock';

export type Generation = {
    key_block: KeyBlock;
    micro_blocks: Array<EncodedPubkey>;
};

