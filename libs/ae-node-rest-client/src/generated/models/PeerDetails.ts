/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedHash } from './EncodedHash';
import type { UInt32 } from './UInt32';
import type { UInt64 } from './UInt64';

export type PeerDetails = {
    /**
     * Hostname of peer
     */
    host: string;
    port: UInt32;
    first_seen: UInt32;
    last_seen: UInt32;
    genesis_hash: EncodedHash;
    top_hash: EncodedHash;
    top_difficulty: UInt64;
    network_id?: string;
    node_version?: string;
    node_revision?: string;
    node_vendor?: string;
    node_os?: string;
};

