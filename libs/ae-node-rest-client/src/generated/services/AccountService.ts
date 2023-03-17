/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Account } from '../models/Account';
import type { NextNonceResponse } from '../models/NextNonceResponse';
import type { SignedTxs } from '../models/SignedTxs';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AccountService {

    /**
     * Get an account by public key
     * @returns Account Successful operation
     * @throws ApiError
     */
    public static getAccountByPubkey({
        pubkey,
        intAsString = false,
    }: {
        /**
         * The public key of the account
         */
        pubkey: string,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<Account> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/{pubkey}',
            path: {
                'pubkey': pubkey,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid public key`,
                404: `Account not found`,
            },
        });
    }

    /**
     * Get an account by public key after the opening key block of the generation at height
     * @returns Account Successful operation
     * @throws ApiError
     */
    public static getAccountByPubkeyAndHeight({
        pubkey,
        height,
        intAsString = false,
    }: {
        /**
         * The public key of the account
         */
        pubkey: string,
        /**
         * The height
         */
        height: number,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<Account> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/{pubkey}/height/{height}',
            path: {
                'pubkey': pubkey,
                'height': height,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid public key or invalid height`,
                404: `Account not found or height not available`,
            },
        });
    }

    /**
     * Get an account by public key after the block indicated by hash. Can be either a micro block or a keyblock hash
     * @returns Account Successful operation
     * @throws ApiError
     */
    public static getAccountByPubkeyAndHash({
        pubkey,
        hash,
        intAsString = false,
    }: {
        /**
         * The public key of the account
         */
        pubkey: string,
        /**
         * The hash of the block - either a keyblock or a microblock
         */
        hash: string,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<Account> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/{pubkey}/hash/{hash}',
            path: {
                'pubkey': pubkey,
                'hash': hash,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid public key or invalid hash`,
                404: `Account not found or hash not available`,
            },
        });
    }

    /**
     * Get pending account transactions by public key
     * @returns SignedTxs Successful operation
     * @throws ApiError
     */
    public static getPendingAccountTransactionsByPubkey({
        pubkey,
        intAsString = false,
    }: {
        /**
         * The public key of the account
         */
        pubkey: string,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<SignedTxs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/{pubkey}/transactions/pending',
            path: {
                'pubkey': pubkey,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid public key`,
                404: `Account not found`,
            },
        });
    }

    /**
     * Get an account's next nonce; This is computed according to whatever is the current account nonce and what transactions are currently present in the transaction pool
     * @returns NextNonceResponse Successful operation
     * @throws ApiError
     */
    public static getAccountNextNonce({
        pubkey,
        intAsString = false,
        strategy = 'max',
    }: {
        /**
         * The public key of the account
         */
        pubkey: string,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
        /**
         * What strategy to use in order to determine the next nonce: shall it check for continuity or return the largest nonce seen + 1. If you choose strategy max, then the greatest nonce seen in the account or currently in the transaction pool is incremented with 1 and returned. If you choose the strategy continuity, then transactions in the mempool are checked if there are gaps - missing nonces that prevent transactions with greater nonces to get included.
         */
        strategy?: 'max' | 'continuity',
    }): CancelablePromise<NextNonceResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/{pubkey}/next-nonce',
            path: {
                'pubkey': pubkey,
            },
            query: {
                'int-as-string': intAsString,
                'strategy': strategy,
            },
            errors: {
                400: `Invalid public key`,
                404: `Account not found`,
            },
        });
    }

}
