/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedPubkey } from './EncodedPubkey';
import type { UInt } from './UInt';
import type { UInt64 } from './UInt64';

export type Account = {
    id: EncodedPubkey;
    balance: UInt;
    nonce: UInt64;
    /**
     * Payable
     */
    payable?: boolean;
    kind?: Account.kind;
    contract_id?: EncodedPubkey;
    /**
     * Name of authorization function for generalized account
     */
    auth_fun?: string;
};

export namespace Account {

    export enum kind {
        BASIC = 'basic',
        GENERALIZED = 'generalized',
    }


}

