/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UInt64 } from './UInt64';

export type RelativeTTL = {
    type: RelativeTTL.type;
    value: UInt64;
};

export namespace RelativeTTL {

    export enum type {
        DELTA = 'delta',
    }


}

