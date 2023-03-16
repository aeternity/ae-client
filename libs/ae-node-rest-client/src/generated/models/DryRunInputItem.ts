/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DryRunCallReq } from './DryRunCallReq';
import type { EncodedByteArray } from './EncodedByteArray';

export type DryRunInputItem = {
    tx?: EncodedByteArray;
    call_req?: DryRunCallReq;
};

