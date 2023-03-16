/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContractCallObject } from './ContractCallObject';

export type DryRunResult = {
    type: string;
    result: string;
    reason?: string;
    call_obj?: ContractCallObject;
};

