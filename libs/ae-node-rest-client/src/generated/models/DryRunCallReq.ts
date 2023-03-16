/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DryRunCallContext } from './DryRunCallContext';
import type { EncodedByteArray } from './EncodedByteArray';
import type { EncodedPubkey } from './EncodedPubkey';
import type { UInt } from './UInt';
import type { UInt16 } from './UInt16';
import type { UInt64 } from './UInt64';

export type DryRunCallReq = {
    calldata: EncodedByteArray;
    contract: EncodedPubkey;
    amount?: UInt;
    gas?: UInt;
    caller?: EncodedPubkey;
    nonce?: UInt64;
    abi_version?: UInt16;
    context?: DryRunCallContext;
};

