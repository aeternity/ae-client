/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ByteCode } from './ByteCode';
import type { EncodedByteArray } from './EncodedByteArray';
import type { EncodedPubkey } from './EncodedPubkey';
import type { OffChainUpdate } from './OffChainUpdate';
import type { UInt } from './UInt';
import type { UInt16 } from './UInt16';

export type OffChainNewContract = (OffChainUpdate & {
    owner: EncodedPubkey;
    vm_version: UInt16;
    abi_version: UInt16;
    code: ByteCode;
    deposit: UInt;
    call_data: EncodedByteArray;
});

