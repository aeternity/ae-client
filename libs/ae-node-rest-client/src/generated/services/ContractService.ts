/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByteCode } from '../models/ByteCode';
import type { ContractCallTx } from '../models/ContractCallTx';
import type { ContractCreateTx } from '../models/ContractCreateTx';
import type { ContractObject } from '../models/ContractObject';
import type { CreateContractUnsignedTx } from '../models/CreateContractUnsignedTx';
import type { PoI } from '../models/PoI';
import type { UnsignedTx } from '../models/UnsignedTx';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ContractService {

    /**
     * Get a contract by pubkey
     * @returns ContractObject Successful operation
     * @throws ApiError
     */
    public static getContract({
        pubkey,
        intAsString = false,
    }: {
        /**
         * Contract pubkey to get proof for
         */
        pubkey: string,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<ContractObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/contracts/{pubkey}',
            path: {
                'pubkey': pubkey,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid pubkey`,
                404: `Contract not found`,
            },
        });
    }

    /**
     * Get contract code by pubkey
     * @returns ByteCode Contract code
     * @throws ApiError
     */
    public static getContractCode({
        pubkey,
        intAsString = false,
    }: {
        /**
         * Contract pubkey to get proof for
         */
        pubkey: string,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<ByteCode> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/contracts/{pubkey}/code',
            path: {
                'pubkey': pubkey,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid pubkey`,
                404: `Contract not found`,
            },
        });
    }

    /**
     * Get a proof of inclusion for a contract
     * @returns PoI Successful operation
     * @throws ApiError
     */
    public static getContractPoI({
        pubkey,
        intAsString = false,
    }: {
        /**
         * Contract pubkey to get proof for
         */
        pubkey: string,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<PoI> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/contracts/{pubkey}/poi',
            path: {
                'pubkey': pubkey,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid contract key`,
                404: `Contract not found`,
            },
        });
    }

    /**
     * Get a contract_create transaction object
     * @returns CreateContractUnsignedTx Successful operation
     * @throws ApiError
     */
    public static postContractCreate({
        requestBody,
        intAsString = false,
    }: {
        requestBody: ContractCreateTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<CreateContractUnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/contracts/create',
            query: {
                'int-as-string': intAsString,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid transaction`,
                404: `Owner account not found`,
            },
        });
    }

    /**
     * Get a contract_call transaction object
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postContractCall({
        requestBody,
        intAsString = false,
    }: {
        requestBody: ContractCallTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<UnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/contracts/call',
            query: {
                'int-as-string': intAsString,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid transaction`,
                404: `Caller account or contract not found`,
            },
        });
    }

}
