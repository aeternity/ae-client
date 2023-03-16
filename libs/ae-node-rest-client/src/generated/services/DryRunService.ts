/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DryRunInput } from '../models/DryRunInput';
import type { DryRunResults } from '../models/DryRunResults';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DryRunService {

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

}
