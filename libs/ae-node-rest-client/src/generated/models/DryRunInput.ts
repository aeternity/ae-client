/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DryRunAccount } from './DryRunAccount';
import type { DryRunInputItem } from './DryRunInputItem';
import type { EncodedHash } from './EncodedHash';

export type DryRunInput = {
    top?: EncodedHash;
    /**
     * Accounts
     */
    accounts?: Array<DryRunAccount>;
    /**
     * Txs
     */
    txs: Array<DryRunInputItem>;
    /**
     * Collect and return on-chain tx events that would result from the call
     */
    tx_events?: boolean;
};

