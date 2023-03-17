/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommitmentId } from '../models/CommitmentId';
import type { NameClaimTx } from '../models/NameClaimTx';
import type { NameEntry } from '../models/NameEntry';
import type { NamePreclaimTx } from '../models/NamePreclaimTx';
import type { NameRevokeTx } from '../models/NameRevokeTx';
import type { NameTransferTx } from '../models/NameTransferTx';
import type { NameUpdateTx } from '../models/NameUpdateTx';
import type { UnsignedTx } from '../models/UnsignedTx';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NameServiceService {

    /**
     * Get name entry from naming system
     * @returns NameEntry Successful operation
     * @throws ApiError
     */
    public static getNameEntryByName({
        name,
        intAsString = false,
    }: {
        /**
         * The name key of the name entry
         */
        name: string,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<NameEntry> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/names/{name}',
            path: {
                'name': name,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid name`,
                404: `Name not found`,
            },
        });
    }

    /**
     * Get a name_preclaim transaction object
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postNamePreclaim({
        requestBody,
        intAsString = false,
    }: {
        requestBody: NamePreclaimTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<UnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/names/preclaim',
            query: {
                'int-as-string': intAsString,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid transaction`,
                404: `Account not found`,
            },
        });
    }

    /**
     * Get a name_claim transaction object
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postNameClaim({
        requestBody,
        intAsString = false,
    }: {
        requestBody: NameClaimTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<UnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/names/claim',
            query: {
                'int-as-string': intAsString,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid transaction`,
                404: `Account or name not found`,
            },
        });
    }

    /**
     * Get a name_update transaction object
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postNameUpdate({
        requestBody,
        intAsString = false,
    }: {
        requestBody: NameUpdateTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<UnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/names/update',
            query: {
                'int-as-string': intAsString,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid transaction`,
                404: `Account or oracle not found`,
            },
        });
    }

    /**
     * Get a name_transfer transaction object
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postNameTransfer({
        requestBody,
        intAsString = false,
    }: {
        requestBody: NameTransferTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<UnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/names/transfer',
            query: {
                'int-as-string': intAsString,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid transaction`,
                404: `Account or name not found`,
            },
        });
    }

    /**
     * Get a name_revoke transaction object
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postNameRevoke({
        requestBody,
        intAsString = false,
    }: {
        requestBody: NameRevokeTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<UnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/names/revoke',
            query: {
                'int-as-string': intAsString,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid transaction`,
                404: `Account or name not found`,
            },
        });
    }

    /**
     * Compute commitment ID for a given salt and name
     * @returns CommitmentId Successful operation
     * @throws ApiError
     */
    public static getCommitmentId({
        name,
        salt,
        intAsString = false,
    }: {
        /**
         * Name
         */
        name: string,
        /**
         * Salt
         */
        salt: number,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<CommitmentId> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/debug/names/commitment-id',
            query: {
                'int-as-string': intAsString,
                'name': name,
                'salt': salt,
            },
            errors: {
                400: `Invalid name`,
            },
        });
    }

}
