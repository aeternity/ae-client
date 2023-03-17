/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UInt64 } from './UInt64';

export type TTL = {
    type: 'delta' | 'block';
    value: UInt64;
};

