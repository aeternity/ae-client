/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OracleExtendTx } from '../models/OracleExtendTx';
import type { OracleQueries } from '../models/OracleQueries';
import type { OracleQuery } from '../models/OracleQuery';
import type { OracleQueryTx } from '../models/OracleQueryTx';
import type { OracleRegisterTx } from '../models/OracleRegisterTx';
import type { OracleRespondTx } from '../models/OracleRespondTx';
import type { RegisteredOracle } from '../models/RegisteredOracle';
import type { UnsignedTx } from '../models/UnsignedTx';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OracleService {

    /**
     * Get an oracle by public key
     * @returns RegisteredOracle Successful operation
     * @throws ApiError
     */
    public static getOracleByPubkey({
        pubkey,
        intAsString = false,
    }: {
        /**
         * The public key of the oracle
         */
        pubkey: string,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<RegisteredOracle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oracles/{pubkey}',
            path: {
                'pubkey': pubkey,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid public key`,
                404: `Oracle not found`,
            },
        });
    }

    /**
     * Get oracle queries by public key
     * @returns OracleQueries Successful operation
     * @throws ApiError
     */
    public static getOracleQueriesByPubkey({
        pubkey,
        intAsString = false,
        from,
        limit = 20,
        type = 'all',
    }: {
        /**
         * The public key of the oracle
         */
        pubkey: string,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
        /**
         * Last query id in previous page
         */
        from?: string,
        /**
         * Max number of oracle queries
         */
        limit?: number,
        /**
         * The type of a query: open, closed or all
         */
        type?: 'open' | 'closed' | 'all',
    }): CancelablePromise<OracleQueries> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oracles/{pubkey}/queries',
            path: {
                'pubkey': pubkey,
            },
            query: {
                'int-as-string': intAsString,
                'from': from,
                'limit': limit,
                'type': type,
            },
            errors: {
                400: `Invalid public key`,
                404: `Oracle not found`,
            },
        });
    }

    /**
     * Get an oracle query by public key and query ID
     * @returns OracleQuery Successful operation
     * @throws ApiError
     */
    public static getOracleQueryByPubkeyAndQueryId({
        pubkey,
        queryId,
        intAsString = false,
    }: {
        /**
         * The public key of the oracle
         */
        pubkey: string,
        /**
         * The ID of the query
         */
        queryId: string,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<OracleQuery> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oracles/{pubkey}/queries/{query-id}',
            path: {
                'pubkey': pubkey,
                'query-id': queryId,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid public key or query ID`,
                404: `Oracle query not found`,
            },
        });
    }

    /**
     * Get a oracle_register transaction object
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postOracleRegister({
        requestBody,
        intAsString = false,
    }: {
        requestBody: OracleRegisterTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<UnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/oracles/register',
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
     * Get an oracle_extend transaction object
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postOracleExtend({
        requestBody,
        intAsString = false,
    }: {
        requestBody: OracleExtendTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<UnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/oracles/extend',
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
     * Get an oracle_query transaction object
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postOracleQuery({
        requestBody,
        intAsString = false,
    }: {
        requestBody: OracleQueryTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<UnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/oracles/query',
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
     * Get an oracle_response transaction object
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postOracleRespond({
        requestBody,
        intAsString = false,
    }: {
        requestBody: OracleRespondTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<UnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/oracles/respond',
            query: {
                'int-as-string': intAsString,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid transaction`,
                404: `Oracle or query not found`,
            },
        });
    }

}
