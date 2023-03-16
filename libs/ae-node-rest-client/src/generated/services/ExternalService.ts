/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Account } from '../models/Account';
import type { ByteCode } from '../models/ByteCode';
import type { Channel } from '../models/Channel';
import type { ContractObject } from '../models/ContractObject';
import type { CountResponse } from '../models/CountResponse';
import type { DryRunInput } from '../models/DryRunInput';
import type { DryRunResults } from '../models/DryRunResults';
import type { EncodedHash } from '../models/EncodedHash';
import type { EncodedTx } from '../models/EncodedTx';
import type { Generation } from '../models/Generation';
import type { HashResponse } from '../models/HashResponse';
import type { Header } from '../models/Header';
import type { HeightResponse } from '../models/HeightResponse';
import type { KeyBlock } from '../models/KeyBlock';
import type { MicroBlockHeader } from '../models/MicroBlockHeader';
import type { NameEntry } from '../models/NameEntry';
import type { NextNonceResponse } from '../models/NextNonceResponse';
import type { OracleQueries } from '../models/OracleQueries';
import type { OracleQuery } from '../models/OracleQuery';
import type { PeerPubKey } from '../models/PeerPubKey';
import type { PoI } from '../models/PoI';
import type { PostTxResponse } from '../models/PostTxResponse';
import type { RegisteredOracle } from '../models/RegisteredOracle';
import type { SignedTx } from '../models/SignedTx';
import type { SignedTxs } from '../models/SignedTxs';
import type { Status } from '../models/Status';
import type { TxInfoObject } from '../models/TxInfoObject';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ExternalService {

    /**
     * Get the top header (either key or micro block)
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns Header Successful operation
     * @throws ApiError
     */
    public static getTopHeader(
        intAsString: boolean = false,
    ): CancelablePromise<Header> {
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
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns KeyBlock Successful operation
     * @throws ApiError
     */
    public static getCurrentKeyBlock(
        intAsString: boolean = false,
    ): CancelablePromise<KeyBlock> {
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
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns HashResponse Successful operation
     * @throws ApiError
     */
    public static getCurrentKeyBlockHash(
        intAsString: boolean = false,
    ): CancelablePromise<HashResponse> {
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
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns HeightResponse Successful operation
     * @throws ApiError
     */
    public static getCurrentKeyBlockHeight(
        intAsString: boolean = false,
    ): CancelablePromise<HeightResponse> {
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
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns KeyBlock Successful operation
     * @throws ApiError
     */
    public static getPendingKeyBlock(
        intAsString: boolean = false,
    ): CancelablePromise<KeyBlock> {
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
     * @param hash The hash of the block - either a keyblock or a microblock
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns KeyBlock Successful operation
     * @throws ApiError
     */
    public static getKeyBlockByHash(
        hash: string,
        intAsString: boolean = false,
    ): CancelablePromise<KeyBlock> {
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
     * @param height The height
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns KeyBlock Successful operation
     * @throws ApiError
     */
    public static getKeyBlockByHeight(
        height: number,
        intAsString: boolean = false,
    ): CancelablePromise<KeyBlock> {
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
     * @param hash The hash of the block - either a keyblock or a microblock
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns MicroBlockHeader Successful operation
     * @throws ApiError
     */
    public static getMicroBlockHeaderByHash(
        hash: string,
        intAsString: boolean = false,
    ): CancelablePromise<MicroBlockHeader> {
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
     * @param hash The hash of the micro block
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns SignedTxs Successful operation
     * @throws ApiError
     */
    public static getMicroBlockTransactionsByHash(
        hash: string,
        intAsString: boolean = false,
    ): CancelablePromise<SignedTxs> {
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
     * @param hash The hash of the micro block
     * @param index The index of the transaction in a block
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns SignedTx Successful operation
     * @throws ApiError
     */
    public static getMicroBlockTransactionByHashAndIndex(
        hash: string,
        index: number,
        intAsString: boolean = false,
    ): CancelablePromise<SignedTx> {
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
     * @param hash The hash of the micro block
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns CountResponse Successful operation
     * @throws ApiError
     */
    public static getMicroBlockTransactionsCountByHash(
        hash: string,
        intAsString: boolean = false,
    ): CancelablePromise<CountResponse> {
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
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns Generation Successful operation
     * @throws ApiError
     */
    public static getCurrentGeneration(
        intAsString: boolean = false,
    ): CancelablePromise<Generation> {
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
     * @param hash The hash of the key block
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns Generation Successful operation
     * @throws ApiError
     */
    public static getGenerationByHash(
        hash: string,
        intAsString: boolean = false,
    ): CancelablePromise<Generation> {
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
     * @param height The height
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns Generation Successful operation
     * @throws ApiError
     */
    public static getGenerationByHeight(
        height: number,
        intAsString: boolean = false,
    ): CancelablePromise<Generation> {
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
     * Get an account by public key
     * @param pubkey The public key of the account
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns Account Successful operation
     * @throws ApiError
     */
    public static getAccountByPubkey(
        pubkey: string,
        intAsString: boolean = false,
    ): CancelablePromise<Account> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/{pubkey}',
            path: {
                'pubkey': pubkey,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid public key`,
                404: `Account not found`,
            },
        });
    }

    /**
     * Get an account by public key after the opening key block of the generation at height
     * @param pubkey The public key of the account
     * @param height The height
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns Account Successful operation
     * @throws ApiError
     */
    public static getAccountByPubkeyAndHeight(
        pubkey: string,
        height: number,
        intAsString: boolean = false,
    ): CancelablePromise<Account> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/{pubkey}/height/{height}',
            path: {
                'pubkey': pubkey,
                'height': height,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid public key or invalid height`,
                404: `Account not found or height not available`,
            },
        });
    }

    /**
     * Get an account by public key after the block indicated by hash. Can be either a micro block or a keyblock hash
     * @param pubkey The public key of the account
     * @param hash The hash of the block - either a keyblock or a microblock
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns Account Successful operation
     * @throws ApiError
     */
    public static getAccountByPubkeyAndHash(
        pubkey: string,
        hash: string,
        intAsString: boolean = false,
    ): CancelablePromise<Account> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/{pubkey}/hash/{hash}',
            path: {
                'pubkey': pubkey,
                'hash': hash,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid public key or invalid hash`,
                404: `Account not found or hash not available`,
            },
        });
    }

    /**
     * Get pending account transactions by public key
     * @param pubkey The public key of the account
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns SignedTxs Successful operation
     * @throws ApiError
     */
    public static getPendingAccountTransactionsByPubkey(
        pubkey: string,
        intAsString: boolean = false,
    ): CancelablePromise<SignedTxs> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/{pubkey}/transactions/pending',
            path: {
                'pubkey': pubkey,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid public key`,
                404: `Account not found`,
            },
        });
    }

    /**
     * Get an account's next nonce; This is computed according to whatever is the current account nonce and what transactions are currently present in the transaction pool
     * @param pubkey The public key of the account
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @param strategy What strategy to use in order to determine the next nonce: shall it check for continuity or return the largest nonce seen + 1. If you choose strategy max, then the greatest nonce seen in the account or currently in the transaction pool is incremented with 1 and returned. If you choose the strategy continuity, then transactions in the mempool are checked if there are gaps - missing nonces that prevent transactions with greater nonces to get included.
     * @returns NextNonceResponse Successful operation
     * @throws ApiError
     */
    public static getAccountNextNonce(
        pubkey: string,
        intAsString: boolean = false,
        strategy: 'max' | 'continuity' = 'max',
    ): CancelablePromise<NextNonceResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/accounts/{pubkey}/next-nonce',
            path: {
                'pubkey': pubkey,
            },
            query: {
                'int-as-string': intAsString,
                'strategy': strategy,
            },
            errors: {
                400: `Invalid public key`,
                404: `Account not found`,
            },
        });
    }

    /**
     * Dry-run transactions on top of a given block. Supports all TXs except GAMetaTx, PayingForTx and OffchainTx. The maximum gas limit of all calls is capped. The maximum gas limit per request is a global node setting. Since DryRunCallReq object do not have a mandatory gas field, if not set a default value of 1000000 is being used instead.
     * @param requestBody transactions
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns DryRunResults Dry-run result
     * @throws ApiError
     */
    public static protectedDryRunTxs(
        requestBody: DryRunInput,
        intAsString: boolean = false,
    ): CancelablePromise<DryRunResults> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dry-run',
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
     * Get a transaction by hash
     * @param hash The hash of the transaction
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns SignedTx Successful operation
     * @throws ApiError
     */
    public static getTransactionByHash(
        hash: string,
        intAsString: boolean = false,
    ): CancelablePromise<SignedTx> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/transactions/{hash}',
            path: {
                'hash': hash,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid hash`,
                404: `Transaction not found`,
            },
        });
    }

    /**
     * @param hash The hash of the transaction
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns TxInfoObject Successful operation
     * @throws ApiError
     */
    public static getTransactionInfoByHash(
        hash: string,
        intAsString: boolean = false,
    ): CancelablePromise<TxInfoObject> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/transactions/{hash}/info',
            path: {
                'hash': hash,
            },
            query: {
                'int-as-string': intAsString,
            },
            errors: {
                400: `Invalid hash`,
                404: `Transaction not found`,
            },
        });
    }

    /**
     * Post a new transaction
     * @param requestBody The new transaction
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns PostTxResponse Successful operation
     * @throws ApiError
     */
    public static postTransaction(
        requestBody: EncodedTx,
        intAsString: boolean = false,
    ): CancelablePromise<PostTxResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/transactions',
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
     * Get peer public key
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns PeerPubKey Successful operation
     * @throws ApiError
     */
    public static getPeerPubkey(
        intAsString: boolean = false,
    ): CancelablePromise<PeerPubKey> {
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
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns Status Successful operation
     * @throws ApiError
     */
    public static getStatus(
        intAsString: boolean = false,
    ): CancelablePromise<Status> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/status',
            query: {
                'int-as-string': intAsString,
            },
        });
    }

    /**
     * Get oldest keyblock hashes counting from genesis including orphans
     * @param intAsString If this flag is set to true, the response will have all integers set as strings
     * @returns EncodedHash Successful operation
     * @throws ApiError
     */
    public static getChainEnds(
        intAsString: boolean = false,
    ): CancelablePromise<Array<EncodedHash>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/status/chain-ends',
            query: {
                'int-as-string': intAsString,
            },
        });
    }

}
