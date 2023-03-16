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
     * @param pubkey The public key of the oracle
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns RegisteredOracle Successful operation
     * @throws ApiError
     */
    public static getOracleByPubkey(
        pubkey: string,
        intAsString: boolean = false,
    ): CancelablePromise<RegisteredOracle> {
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
     * @param pubkey The public key of the oracle
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @param from Last query id in previous page
     * @param limit Max number of oracle queries
     * @param type The type of a query: open, closed or all
     * @returns OracleQueries Successful operation
     * @throws ApiError
     */
    public static getOracleQueriesByPubkey(
        pubkey: string,
        intAsString: boolean = false,
        from?: string,
        limit: number = 20,
        type: 'open' | 'closed' | 'all' = 'all',
    ): CancelablePromise<OracleQueries> {
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
     * @param pubkey The public key of the oracle
     * @param queryId The ID of the query
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns OracleQuery Successful operation
     * @throws ApiError
     */
    public static getOracleQueryByPubkeyAndQueryId(
        pubkey: string,
        queryId: string,
        intAsString: boolean = false,
    ): CancelablePromise<OracleQuery> {
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
     * @param requestBody
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postOracleRegister(
        requestBody: OracleRegisterTx,
        intAsString: boolean = false,
    ): CancelablePromise<UnsignedTx> {
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
     * @param requestBody
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postOracleExtend(
        requestBody: OracleExtendTx,
        intAsString: boolean = false,
    ): CancelablePromise<UnsignedTx> {
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
     * @param requestBody
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postOracleQuery(
        requestBody: OracleQueryTx,
        intAsString: boolean = false,
    ): CancelablePromise<UnsignedTx> {
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
     * @param requestBody
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postOracleRespond(
        requestBody: OracleRespondTx,
        intAsString: boolean = false,
    ): CancelablePromise<UnsignedTx> {
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
