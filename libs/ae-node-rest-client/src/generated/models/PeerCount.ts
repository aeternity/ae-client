/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UInt64 } from './UInt64';

export type PeerCount = {
    connected: {
        inbound?: UInt64;
        outbound?: UInt64;
    };
    available: {
        verified?: UInt64;
        unverified?: UInt64;
    };
    blocked: UInt64;
};

