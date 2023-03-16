/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UInt32 } from './UInt32';
import type { UInt64 } from './UInt64';

export type Protocol = {
    version: UInt32;
    effective_at_height: UInt64;
};

