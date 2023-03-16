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
     * @param hash The hash of the transaction
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns SignedTx Successful operation
     * @throws ApiError
     */
    public static getTransactionByHash(
        hash: string,
        intAsString: boolean = false,
    ): CancelablePromise<SignedTx> {
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
     * @param hash The hash of the transaction
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns TxInfoObject Successful operation
     * @throws ApiError
     */
    public static getTransactionInfoByHash(
        hash: string,
        intAsString: boolean = false,
    ): CancelablePromise<TxInfoObject> {
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
     * @param requestBody The new transaction
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns PostTxResponse Successful operation
     * @throws ApiError
     */
    public static postTransaction(
        requestBody: EncodedTx,
        intAsString: boolean = false,
    ): CancelablePromise<PostTxResponse> {
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
     * @param requestBody A spend transaction
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postSpend(
        requestBody: SpendTx,
        intAsString: boolean = false,
    ): CancelablePromise<UnsignedTx> {
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
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns SignedTxs Successful operation
     * @throws ApiError
     */
    public static getPendingTransactions(
        intAsString: boolean = false,
    ): CancelablePromise<SignedTxs> {
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
     * @param requestBody A paying-for transaction
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postPayingFor(
        requestBody: PayingForTx,
        intAsString: boolean = false,
    ): CancelablePromise<UnsignedTx> {
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
