/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedPubkey } from './EncodedPubkey';
import type { UnsignedTx } from './UnsignedTx';

export type CreateContractUnsignedTx = (UnsignedTx & {
    contract_id: EncodedPubkey;
});

