/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PeerCount } from '../models/PeerCount';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NodeOperatorService {

    /**
     * Delete a pending transaction from the mempool
     * @returns any The transaction was deleted from the pool
     * @throws ApiError
     */
    public static deleteTxFromMempool({
        hash,
    }: {
        /**
         * The hash of the transaction
         */
        hash: string,
    }): CancelablePromise<{
        status?: string;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/node/operator/mempool/hash/{hash}',
            path: {
                'hash': hash,
            },
            errors: {
                400: `Invalid tx hash`,
                404: `Transaction not in mempool`,
            },
        });
    }

    /**
     * Get the number of peers in the different pools. This is to be used to catch if a node loses connectivity
     * @returns PeerCount The different count of peers in the respective pools
     * @throws ApiError
     */
    public static getPeerCount({
        intAsString = false,
    }: {
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<PeerCount> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/node/operator/peers/count',
            query: {
                'int-as-string': intAsString,
            },
        });
    }

}
