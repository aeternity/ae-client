/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedHash } from './EncodedHash';
import type { EncodedPubkey } from './EncodedPubkey';
import type { PeerConnections } from './PeerConnections';
import type { Protocol } from './Protocol';
import type { UInt32 } from './UInt32';
import type { UInt64 } from './UInt64';

export type Status = {
    genesis_key_block_hash: EncodedHash;
    solutions: UInt64;
    difficulty: UInt64;
    syncing: boolean;
    sync_progress?: number;
    listening: boolean;
    protocols: Array<Protocol>;
    node_version: string;
    node_revision: string;
    peer_count: UInt32;
    peer_connections: PeerConnections;
    pending_transactions_count: UInt32;
    network_id: string;
    peer_pubkey: EncodedPubkey;
    top_key_block_hash: EncodedHash;
    top_block_height: UInt64;
};

