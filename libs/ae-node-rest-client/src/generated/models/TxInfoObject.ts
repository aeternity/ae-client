/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContractCallObject } from './ContractCallObject';
import type { GAObject } from './GAObject';

export type TxInfoObject = {
    call_info?: ContractCallObject;
    ga_info?: GAObject;
    tx_info?: string;
};

