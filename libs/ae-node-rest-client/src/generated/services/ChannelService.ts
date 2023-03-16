/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Channel } from '../models/Channel';
import type { ChannelCloseMutualTx } from '../models/ChannelCloseMutualTx';
import type { ChannelCloseSoloTx } from '../models/ChannelCloseSoloTx';
import type { ChannelCreateTx } from '../models/ChannelCreateTx';
import type { ChannelDepositTx } from '../models/ChannelDepositTx';
import type { ChannelSetDelegatesTx } from '../models/ChannelSetDelegatesTx';
import type { ChannelSettleTx } from '../models/ChannelSettleTx';
import type { ChannelSlashTx } from '../models/ChannelSlashTx';
import type { ChannelSnapshotSoloTx } from '../models/ChannelSnapshotSoloTx';
import type { ChannelWithdrawTx } from '../models/ChannelWithdrawTx';
import type { UnsignedTx } from '../models/UnsignedTx';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ChannelService {

    /**
     * Get channel by public key
     * @param pubkey The pubkey of the channel
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns Channel Successful operation
     * @throws ApiError
     */
    public static getChannelByPubkey(
        pubkey: string,
        intAsString: boolean = false,
    ): CancelablePromise<Channel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/channels/{pubkey}',
            path: {
                'pubkey': pubkey,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid public key`,
                404: `Channel not found`,
            },
        });
    }

    /**
     * Get a channel_create transaction object
     * @param requestBody
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postChannelCreate(
        requestBody: ChannelCreateTx,
        intAsString: boolean = false,
    ): CancelablePromise<UnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/channels/create',
            query: {
                'int-as-string': intAsString,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid transaction`,
                404: `Initiator not found`,
            },
        });
    }

    /**
     * Get a channel_deposit transaction object
     * @param requestBody
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postChannelDeposit(
        requestBody: ChannelDepositTx,
        intAsString: boolean = false,
    ): CancelablePromise<UnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/channels/deposit',
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
     * Get a channel_withdrawal transaction object
     * @param requestBody
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postChannelWithdraw(
        requestBody: ChannelWithdrawTx,
        intAsString: boolean = false,
    ): CancelablePromise<UnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/channels/withdraw',
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
     * Get a channel_snapshot_solo transaction object
     * @param requestBody
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postChannelSnapshotSolo(
        requestBody: ChannelSnapshotSoloTx,
        intAsString: boolean = false,
    ): CancelablePromise<UnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/channels/snapshot/solo',
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
     * Get a channel_set_delegates_tx transaction object
     * @param requestBody
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postChannelSetDelegates(
        requestBody: ChannelSetDelegatesTx,
        intAsString: boolean = false,
    ): CancelablePromise<UnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/channels/set-delegates',
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
     * Get a channel_close_mutual transaction object
     * @param requestBody
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postChannelCloseMutual(
        requestBody: ChannelCloseMutualTx,
        intAsString: boolean = false,
    ): CancelablePromise<UnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/channels/close/mutual',
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
     * Get a channel_close_solo transaction object
     * @param requestBody
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postChannelCloseSolo(
        requestBody: ChannelCloseSoloTx,
        intAsString: boolean = false,
    ): CancelablePromise<UnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/channels/close/solo',
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
     * Get a channel_slash transaction object
     * @param requestBody
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postChannelSlash(
        requestBody: ChannelSlashTx,
        intAsString: boolean = false,
    ): CancelablePromise<UnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/channels/slash',
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
     * Get a channel_settle transaction object
     * @param requestBody
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postChannelSettle(
        requestBody: ChannelSettleTx,
        intAsString: boolean = false,
    ): CancelablePromise<UnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/channels/settle',
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

}
