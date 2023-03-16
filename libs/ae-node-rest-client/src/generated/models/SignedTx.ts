/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedHash } from './EncodedHash';
import type { EncodedValue } from './EncodedValue';
import type { Tx } from './Tx';
import type { TxBlockHeight } from './TxBlockHeight';

export type SignedTx = {
    tx: Tx;
    block_height?: TxBlockHeight;
    block_hash?: EncodedHash;
    hash?: EncodedHash;
    /**
     * At least one signature is required unless for Generalized Account Meta transactions
     */
    signatures?: Array<EncodedValue>;
};

