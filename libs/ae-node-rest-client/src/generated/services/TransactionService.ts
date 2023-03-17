/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EncodedTx } from '../models/EncodedTx';
import type { PayingForTx } from '../models/PayingForTx';
import type { PostTxResponse } from '../models/PostTxResponse';
import type { SignedTx } from '../models/SignedTx';
import type { SignedTxs } from '../models/SignedTxs';
import type { SpendTx } from '../models/SpendTx';
import type { TxInfoObject } from '../models/TxInfoObject';
import type { UnsignedTx } from '../models/UnsignedTx';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TransactionService {

    /**
     * Get a transaction by hash
     * @returns SignedTx Successful operation
     * @throws ApiError
     */
    public static getTransactionByHash({
        hash,
        intAsString = false,
    }: {
        /**
         * The hash of the transaction
         */
        hash: string,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<SignedTx> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/transactions/{hash}',
            path: {
                'hash': hash,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid hash`,
                404: `Transaction not found`,
            },
        });
    }

    /**
     * @returns TxInfoObject Successful operation
     * @throws ApiError
     */
    public static getTransactionInfoByHash({
        hash,
        intAsString = false,
    }: {
        /**
         * The hash of the transaction
         */
        hash: string,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<TxInfoObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/transactions/{hash}/info',
            path: {
                'hash': hash,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid hash`,
                404: `Transaction not found`,
            },
        });
    }

    /**
     * Post a new transaction
     * @returns PostTxResponse Successful operation
     * @throws ApiError
     */
    public static postTransaction({
        requestBody,
        intAsString = false,
    }: {
        /**
         * The new transaction
         */
        requestBody: EncodedTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<PostTxResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/transactions',
            query: {
                'int-as-string': intAsString,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid transaction`,
            },
        });
    }

    /**
     * Get a spend transaction object
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postSpend({
        requestBody,
        intAsString = false,
    }: {
        /**
         * A spend transaction
         */
        requestBody: SpendTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<UnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/transactions/spend',
            query: {
                'int-as-string': intAsString,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid transaction`,
                404: `Sender account not found`,
            },
        });
    }

    /**
     * Get pending transactions
     * @returns SignedTxs Successful operation
     * @throws ApiError
     */
    public static getPendingTransactions({
        intAsString = false,
    }: {
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<SignedTxs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/debug/transactions/pending',
            query: {
                'int-as-string': intAsString,
            },
        });
    }

    /**
     * Get a paying-for transaction object
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postPayingFor({
        requestBody,
        intAsString = false,
    }: {
        /**
         * A paying-for transaction
         */
        requestBody: PayingForTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<UnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/transactions/paying-for',
            query: {
                'int-as-string': intAsString,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid transaction`,
                404: `Payer account not found`,
            },
        });
    }

}
