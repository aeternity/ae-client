/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UInt } from './UInt';

export type TokenSupply = {
    accounts?: UInt;
    contracts?: UInt;
    contract_oracles?: UInt;
    locked?: UInt;
    oracles?: UInt;
    oracle_queries?: UInt;
    pending_rewards?: UInt;
    total?: UInt;
};

