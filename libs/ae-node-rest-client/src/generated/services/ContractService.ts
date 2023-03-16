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
     * @param pubkey Contract pubkey to get proof for
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns ContractObject Successful operation
     * @throws ApiError
     */
    public static getContract(
        pubkey: string,
        intAsString: boolean = false,
    ): CancelablePromise<ContractObject> {
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
     * @param pubkey Contract pubkey to get proof for
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns ByteCode Contract code
     * @throws ApiError
     */
    public static getContractCode(
        pubkey: string,
        intAsString: boolean = false,
    ): CancelablePromise<ByteCode> {
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
     * @param pubkey Contract pubkey to get proof for
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns PoI Successful operation
     * @throws ApiError
     */
    public static getContractPoI(
        pubkey: string,
        intAsString: boolean = false,
    ): CancelablePromise<PoI> {
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
     * @param requestBody
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns CreateContractUnsignedTx Successful operation
     * @throws ApiError
     */
    public static postContractCreate(
        requestBody: ContractCreateTx,
        intAsString: boolean = false,
    ): CancelablePromise<CreateContractUnsignedTx> {
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
     * @param requestBody
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postContractCall(
        requestBody: ContractCallTx,
        intAsString: boolean = false,
    ): CancelablePromise<UnsignedTx> {
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
