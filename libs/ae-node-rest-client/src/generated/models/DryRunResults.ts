/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DryRunResult } from './DryRunResult';
import type { TxEvent } from './TxEvent';

export type DryRunResults = {
    /**
     * results
     */
    results: Array<DryRunResult>;
    /**
     * on-chain tx events
     */
    tx_events?: Array<TxEvent>;
};

