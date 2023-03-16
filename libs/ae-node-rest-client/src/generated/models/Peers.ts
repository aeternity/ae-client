/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Peer } from './Peer';

export type Peers = {
    /**
     * All discovered peers
     */
    peers: Array<Peer>;
    /**
     * All blocked peers
     */
    blocked: Array<Peer>;
};

