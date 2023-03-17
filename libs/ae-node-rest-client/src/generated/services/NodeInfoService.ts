/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CountResponse } from '../models/CountResponse';
import type { NetworkStatus } from '../models/NetworkStatus';
import type { PeerPubKey } from '../models/PeerPubKey';
import type { Peers } from '../models/Peers';
import type { PubKey } from '../models/PubKey';
import type { Status } from '../models/Status';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NodeInfoService {

    /**
     * Get peer public key
     * @returns PeerPubKey Successful operation
     * @throws ApiError
     */
    public static getPeerPubkey({
        intAsString = false,
    }: {
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<PeerPubKey> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/peers/pubkey',
            query: {
                'int-as-string': intAsString,
            },
        });
    }

    /**
     * Get the status of a node
     * @returns Status Successful operation
     * @throws ApiError
     */
    public static getStatus({
        intAsString = false,
    }: {
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<Status> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/status',
            query: {
                'int-as-string': intAsString,
            },
        });
    }

    /**
     * Get detailed analytics on peers
     * @returns NetworkStatus Successful operation
     * @throws ApiError
     */
    public static getNetworkStatus({
        intAsString = false,
    }: {
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<NetworkStatus> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/debug/network',
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                404: `Analytics disabled`,
            },
        });
    }

    /**
     * Get the number of currently active State Channel FSMs
     * @returns CountResponse Successful operation
     * @throws ApiError
     */
    public static getChannelsFsmCount(): CancelablePromise<CountResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/debug/channels/fsm-count',
        });
    }

    /**
     * Get node's beneficiary public key
     * @returns PubKey Successful operation
     * @throws ApiError
     */
    public static getNodeBeneficiary(): CancelablePromise<PubKey> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/debug/accounts/beneficiary',
            errors: {
                404: `Beneficiary error`,
            },
        });
    }

    /**
     * Get node's public key
     * @returns PubKey Successful operation
     * @throws ApiError
     */
    public static getNodePubkey({
        intAsString = false,
    }: {
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<PubKey> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/debug/accounts/node',
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                404: `Public key not found`,
            },
        });
    }

    /**
     * Get node Peers
     * @returns Peers successful operation
     * @throws ApiError
     */
    public static getPeers({
        intAsString = false,
    }: {
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<Peers> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/debug/peers',
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                403: `Info not enabled`,
            },
        });
    }

}
