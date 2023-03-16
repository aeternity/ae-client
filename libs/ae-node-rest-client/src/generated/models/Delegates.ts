/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EncodedPubkey } from './EncodedPubkey';

export type Delegates = (Array<EncodedPubkey> | {
    initiator?: Array<EncodedPubkey>;
    responder?: Array<EncodedPubkey>;
});

