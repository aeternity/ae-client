/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UInt64 } from './UInt64';

export type TTL = {
    type: TTL.type;
    value: UInt64;
};

export namespace TTL {

    export enum type {
        DELTA = 'delta',
        BLOCK = 'block',
    }


}

