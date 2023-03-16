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
     * @param name The name key of the name entry
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns NameEntry Successful operation
     * @throws ApiError
     */
    public static getNameEntryByName(
        name: string,
        intAsString: boolean = false,
    ): CancelablePromise<NameEntry> {
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
     * @param requestBody
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postNamePreclaim(
        requestBody: NamePreclaimTx,
        intAsString: boolean = false,
    ): CancelablePromise<UnsignedTx> {
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
     * @param requestBody
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postNameClaim(
        requestBody: NameClaimTx,
        intAsString: boolean = false,
    ): CancelablePromise<UnsignedTx> {
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
     * @param requestBody
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postNameUpdate(
        requestBody: NameUpdateTx,
        intAsString: boolean = false,
    ): CancelablePromise<UnsignedTx> {
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
     * @param requestBody
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postNameTransfer(
        requestBody: NameTransferTx,
        intAsString: boolean = false,
    ): CancelablePromise<UnsignedTx> {
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
     * @param requestBody
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postNameRevoke(
        requestBody: NameRevokeTx,
        intAsString: boolean = false,
    ): CancelablePromise<UnsignedTx> {
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
     * @param name Name
     * @param salt Salt
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns CommitmentId Successful operation
     * @throws ApiError
     */
    public static getCommitmentId(
        name: string,
        salt: number,
        intAsString: boolean = false,
    ): CancelablePromise<CommitmentId> {
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
