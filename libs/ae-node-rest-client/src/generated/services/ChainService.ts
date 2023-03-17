/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountResponse } from '../models/CountResponse';
import type { EncodedHash } from '../models/EncodedHash';
import type { Generation } from '../models/Generation';
import type { HashResponse } from '../models/HashResponse';
import type { Header } from '../models/Header';
import type { HeightResponse } from '../models/HeightResponse';
import type { KeyBlock } from '../models/KeyBlock';
import type { MicroBlockHeader } from '../models/MicroBlockHeader';
import type { SignedTx } from '../models/SignedTx';
import type { SignedTxs } from '../models/SignedTxs';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ChainService {

    /**
     * Get the top header (either key or micro block)
     * @returns Header Successful operation
     * @throws ApiError
     */
    public static getTopHeader({
        intAsString = false,
    }: {
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<Header> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/headers/top',
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                404: `Block not found`,
            },
        });
    }

    /**
     * Get the current key block
     * @returns KeyBlock Successful operation
     * @throws ApiError
     */
    public static getCurrentKeyBlock({
        intAsString = false,
    }: {
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<KeyBlock> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/key-blocks/current',
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                404: `Block not found`,
            },
        });
    }

    /**
     * Get the hash of the current key block
     * @returns HashResponse Successful operation
     * @throws ApiError
     */
    public static getCurrentKeyBlockHash({
        intAsString = false,
    }: {
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<HashResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/key-blocks/current/hash',
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                404: `Block not found`,
            },
        });
    }

    /**
     * Get the height of the current key block
     * @returns HeightResponse Successful operation
     * @throws ApiError
     */
    public static getCurrentKeyBlockHeight({
        intAsString = false,
    }: {
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<HeightResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/key-blocks/current/height',
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                404: `Block not found`,
            },
        });
    }

    /**
     * Get the pending key block
     * @returns KeyBlock Successful operation
     * @throws ApiError
     */
    public static getPendingKeyBlock({
        intAsString = false,
    }: {
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<KeyBlock> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/key-blocks/pending',
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Beneficiary not configured`,
                404: `Block not found`,
            },
        });
    }

    /**
     * Get a key block by hash
     * @returns KeyBlock Successful operation
     * @throws ApiError
     */
    public static getKeyBlockByHash({
        hash,
        intAsString = false,
    }: {
        /**
         * The hash of the block - either a keyblock or a microblock
         */
        hash: string,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<KeyBlock> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/key-blocks/hash/{hash}',
            path: {
                'hash': hash,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid hash`,
                404: `Block not found`,
            },
        });
    }

    /**
     * Get a key block by height
     * @returns KeyBlock Successful operation
     * @throws ApiError
     */
    public static getKeyBlockByHeight({
        height,
        intAsString = false,
    }: {
        /**
         * The height
         */
        height: number,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<KeyBlock> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/key-blocks/height/{height}',
            path: {
                'height': height,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                404: `Block not found`,
            },
        });
    }

    /**
     * Get a micro block header by hash
     * @returns MicroBlockHeader Successful operation
     * @throws ApiError
     */
    public static getMicroBlockHeaderByHash({
        hash,
        intAsString = false,
    }: {
        /**
         * The hash of the block - either a keyblock or a microblock
         */
        hash: string,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<MicroBlockHeader> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/micro-blocks/hash/{hash}/header',
            path: {
                'hash': hash,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid hash`,
                404: `Block not found`,
            },
        });
    }

    /**
     * Get micro block transactions by hash
     * @returns SignedTxs Successful operation
     * @throws ApiError
     */
    public static getMicroBlockTransactionsByHash({
        hash,
        intAsString = false,
    }: {
        /**
         * The hash of the micro block
         */
        hash: string,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<SignedTxs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/micro-blocks/hash/{hash}/transactions',
            path: {
                'hash': hash,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid hash`,
                404: `Block not found`,
            },
        });
    }

    /**
     * Get a micro block transaction by hash and index
     * @returns SignedTx Successful operation
     * @throws ApiError
     */
    public static getMicroBlockTransactionByHashAndIndex({
        hash,
        index,
        intAsString = false,
    }: {
        /**
         * The hash of the micro block
         */
        hash: string,
        /**
         * The index of the transaction in a block
         */
        index: number,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<SignedTx> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/micro-blocks/hash/{hash}/transactions/index/{index}',
            path: {
                'hash': hash,
                'index': index,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid hash or index`,
                404: `Block not found`,
            },
        });
    }

    /**
     * Get micro block transaction count by hash
     * @returns CountResponse Successful operation
     * @throws ApiError
     */
    public static getMicroBlockTransactionsCountByHash({
        hash,
        intAsString = false,
    }: {
        /**
         * The hash of the micro block
         */
        hash: string,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<CountResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/micro-blocks/hash/{hash}/transactions/count',
            path: {
                'hash': hash,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid hash`,
                404: `Block not found`,
            },
        });
    }

    /**
     * Get the current generation
     * @returns Generation Successful operation
     * @throws ApiError
     */
    public static getCurrentGeneration({
        intAsString = false,
    }: {
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<Generation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/generations/current',
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                404: `Generation not found`,
            },
        });
    }

    /**
     * Get a generation by hash
     * @returns Generation Successful operation
     * @throws ApiError
     */
    public static getGenerationByHash({
        hash,
        intAsString = false,
    }: {
        /**
         * The hash of the key block
         */
        hash: string,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<Generation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/generations/hash/{hash}',
            path: {
                'hash': hash,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid hash`,
                404: `Generation not found`,
            },
        });
    }

    /**
     * Get a generation by height
     * @returns Generation Successful operation
     * @throws ApiError
     */
    public static getGenerationByHeight({
        height,
        intAsString = false,
    }: {
        /**
         * The height
         */
        height: number,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<Generation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/generations/height/{height}',
            path: {
                'height': height,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                404: `Generation not found`,
            },
        });
    }

    /**
     * Get oldest keyblock hashes counting from genesis including orphans
     * @returns EncodedHash Successful operation
     * @throws ApiError
     */
    public static getChainEnds({
        intAsString = false,
    }: {
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<Array<EncodedHash>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/status/chain-ends',
            query: {
                'int-as-string': intAsString,
            },
        });
    }

    /**
     * Post a mined key block
     * @returns any Successful operation
     * @throws ApiError
     */
    public static postKeyBlock({
        requestBody,
    }: {
        /**
         * Mined key block
         */
        requestBody: KeyBlock,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/key-blocks',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid block`,
            },
        });
    }

}
