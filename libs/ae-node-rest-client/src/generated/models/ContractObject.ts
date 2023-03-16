/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedPubkey } from './EncodedPubkey';
import type { UInt16 } from './UInt16';
import type { UInt64 } from './UInt64';

export type ContractObject = {
    id: EncodedPubkey;
    owner_id: EncodedPubkey;
    vm_version: UInt16;
    abi_version: UInt16;
    active: boolean;
    referrer_ids: Array<EncodedPubkey>;
    deposit: UInt64;
};

