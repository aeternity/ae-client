/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChannelCloseMutualTx } from '../models/ChannelCloseMutualTx';
import type { ChannelCloseSoloTx } from '../models/ChannelCloseSoloTx';
import type { ChannelCreateTx } from '../models/ChannelCreateTx';
import type { ChannelDepositTx } from '../models/ChannelDepositTx';
import type { ChannelSetDelegatesTx } from '../models/ChannelSetDelegatesTx';
import type { ChannelSettleTx } from '../models/ChannelSettleTx';
import type { ChannelSlashTx } from '../models/ChannelSlashTx';
import type { ChannelSnapshotSoloTx } from '../models/ChannelSnapshotSoloTx';
import type { ChannelWithdrawTx } from '../models/ChannelWithdrawTx';
import type { CheckTxInPoolResponse } from '../models/CheckTxInPoolResponse';
import type { CommitmentId } from '../models/CommitmentId';
import type { ContractCallTx } from '../models/ContractCallTx';
import type { ContractCreateTx } from '../models/ContractCreateTx';
import type { CountResponse } from '../models/CountResponse';
import type { CreateContractUnsignedTx } from '../models/CreateContractUnsignedTx';
import type { DryRunInput } from '../models/DryRunInput';
import type { DryRunResults } from '../models/DryRunResults';
import type { NameClaimTx } from '../models/NameClaimTx';
import type { NamePreclaimTx } from '../models/NamePreclaimTx';
import type { NameRevokeTx } from '../models/NameRevokeTx';
import type { NameTransferTx } from '../models/NameTransferTx';
import type { NameUpdateTx } from '../models/NameUpdateTx';
import type { NetworkStatus } from '../models/NetworkStatus';
import type { OracleExtendTx } from '../models/OracleExtendTx';
import type { OracleQueryTx } from '../models/OracleQueryTx';
import type { OracleRegisterTx } from '../models/OracleRegisterTx';
import type { OracleRespondTx } from '../models/OracleRespondTx';
import type { PayingForTx } from '../models/PayingForTx';
import type { Peers } from '../models/Peers';
import type { PubKey } from '../models/PubKey';
import type { SignedTxs } from '../models/SignedTxs';
import type { SpendTx } from '../models/SpendTx';
import type { TokenSupply } from '../models/TokenSupply';
import type { UnsignedTx } from '../models/UnsignedTx';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DebugService {

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
     * Get a spend transaction object
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postSpend({
        requestBody,
        intAsString = false,
    }: {
        /**
         * A spend transaction
         */
        requestBody: SpendTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<UnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/transactions/spend',
            query: {
                'int-as-string': intAsString,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid transaction`,
                404: `Sender account not found`,
            },
        });
    }

    /**
     * Get a channel_create transaction object
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postChannelCreate({
        requestBody,
        intAsString = false,
    }: {
        requestBody: ChannelCreateTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<UnsignedTx> {
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
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postChannelDeposit({
        requestBody,
        intAsString = false,
    }: {
        requestBody: ChannelDepositTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<UnsignedTx> {
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
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postChannelWithdraw({
        requestBody,
        intAsString = false,
    }: {
        requestBody: ChannelWithdrawTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<UnsignedTx> {
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
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postChannelSnapshotSolo({
        requestBody,
        intAsString = false,
    }: {
        requestBody: ChannelSnapshotSoloTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<UnsignedTx> {
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
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postChannelSetDelegates({
        requestBody,
        intAsString = false,
    }: {
        requestBody: ChannelSetDelegatesTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<UnsignedTx> {
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
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postChannelCloseMutual({
        requestBody,
        intAsString = false,
    }: {
        requestBody: ChannelCloseMutualTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<UnsignedTx> {
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
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postChannelCloseSolo({
        requestBody,
        intAsString = false,
    }: {
        requestBody: ChannelCloseSoloTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<UnsignedTx> {
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
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postChannelSlash({
        requestBody,
        intAsString = false,
    }: {
        requestBody: ChannelSlashTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<UnsignedTx> {
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
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postChannelSettle({
        requestBody,
        intAsString = false,
    }: {
        requestBody: ChannelSettleTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<UnsignedTx> {
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
     * Get pending transactions
     * @returns SignedTxs Successful operation
     * @throws ApiError
     */
    public static getPendingTransactions({
        intAsString = false,
    }: {
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<SignedTxs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/debug/transactions/pending',
            query: {
                'int-as-string': intAsString,
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

    /**
     * Dry-run transactions on top of a given block. Supports all TXs except GAMetaTx, PayingForTx and OffchainTx
     * @returns DryRunResults Dry-run result
     * @throws ApiError
     */
    public static dryRunTxs({
        requestBody,
        intAsString = false,
    }: {
        /**
         * transactions
         */
        requestBody: DryRunInput,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<DryRunResults> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/transactions/dry-run',
            query: {
                'int-as-string': intAsString,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input`,
                403: `Over the gas limit`,
            },
        });
    }

    /**
     * Get a paying-for transaction object
     * @returns UnsignedTx Successful operation
     * @throws ApiError
     */
    public static postPayingFor({
        requestBody,
        intAsString = false,
    }: {
        /**
         * A paying-for transaction
         */
        requestBody: PayingForTx,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<UnsignedTx> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/debug/transactions/paying-for',
            query: {
                'int-as-string': intAsString,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid transaction`,
                404: `Payer account not found`,
            },
        });
    }

    /**
     * Check if a transaction in the pool can be included in a microblock or if it is blocked by something: not enough tokens, missing nonce or something else
     * @returns CheckTxInPoolResponse The transaction status
     * @throws ApiError
     */
    public static getCheckTxInPool({
        hash,
        intAsString = false,
    }: {
        /**
         * The hash of the transaction
         */
        hash: string,
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<CheckTxInPoolResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/debug/check-tx/pool/{hash}',
            path: {
                'hash': hash,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                404: `Transaction is not in transaction pool`,
            },
        });
    }

    /**
     * Get total token supply at height
     * @returns TokenSupply Total token supply at height divided in categories
     * @throws ApiError
     */
    public static getTokenSupplyByHeight({
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
    }): CancelablePromise<TokenSupply> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/debug/token-supply/height/{height}',
            path: {
                'height': height,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Height not available`,
            },
        });
    }

    /**
     * This is a sample URI to simulate a request crash. Shall be used for test purposes only
     * @returns TokenSupply This will never happen
     * @throws ApiError
     */
    public static getCrashRequest({
        intAsString = false,
    }: {
        /**
         * If this flag is set to true, the response will have all integers set as strings
         */
        intAsString?: boolean,
    }): CancelablePromise<TokenSupply> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/debug/crash',
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                500: `We always end up here`,
            },
        });
    }

}
