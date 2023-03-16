/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChannelCloseMutualTx } from './ChannelCloseMutualTx';
import type { ChannelCloseSoloTx } from './ChannelCloseSoloTx';
import type { ChannelCreateTx } from './ChannelCreateTx';
import type { ChannelDepositTx } from './ChannelDepositTx';
import type { ChannelForceProgressTx } from './ChannelForceProgressTx';
import type { ChannelSetDelegatesTx } from './ChannelSetDelegatesTx';
import type { ChannelSettleTx } from './ChannelSettleTx';
import type { ChannelSlashTx } from './ChannelSlashTx';
import type { ChannelSnapshotSoloTx } from './ChannelSnapshotSoloTx';
import type { ChannelWithdrawTx } from './ChannelWithdrawTx';
import type { ContractCallTx } from './ContractCallTx';
import type { ContractCreateTx } from './ContractCreateTx';
import type { GAAttachTx } from './GAAttachTx';
import type { GAMetaTx } from './GAMetaTx';
import type { NameClaimTx } from './NameClaimTx';
import type { NamePreclaimTx } from './NamePreclaimTx';
import type { NameRevokeTx } from './NameRevokeTx';
import type { NameTransferTx } from './NameTransferTx';
import type { NameUpdateTx } from './NameUpdateTx';
import type { OracleExtendTx } from './OracleExtendTx';
import type { OracleQueryTx } from './OracleQueryTx';
import type { OracleRegisterTx } from './OracleRegisterTx';
import type { OracleRespondTx } from './OracleRespondTx';
import type { PayingForTx } from './PayingForTx';
import type { SpendTx } from './SpendTx';
import type { UInt32 } from './UInt32';

export type Tx = ({
    version: UInt32;
    type: Tx.type;
} & (SpendTx | ChannelCreateTx | ChannelDepositTx | ChannelWithdrawTx | ChannelForceProgressTx | ChannelCloseMutualTx | ChannelCloseSoloTx | ChannelSlashTx | ChannelSettleTx | ChannelSnapshotSoloTx | ChannelSetDelegatesTx | OracleRegisterTx | OracleExtendTx | OracleQueryTx | OracleRespondTx | NamePreclaimTx | NameClaimTx | NameUpdateTx | NameTransferTx | NameRevokeTx | ContractCreateTx | ContractCallTx | GAAttachTx | GAMetaTx | PayingForTx));

export namespace Tx {

    export enum type {
        SPEND_TX = 'SpendTx',
        CHANNEL_CREATE_TX = 'ChannelCreateTx',
        CHANNEL_DEPOSIT_TX = 'ChannelDepositTx',
        CHANNEL_WITHDRAW_TX = 'ChannelWithdrawTx',
        CHANNEL_FORCE_PROGRESS_TX = 'ChannelForceProgressTx',
        CHANNEL_CLOSE_MUTUAL_TX = 'ChannelCloseMutualTx',
        CHANNEL_CLOSE_SOLO_TX = 'ChannelCloseSoloTx',
        CHANNEL_SLASH_TX = 'ChannelSlashTx',
        CHANNEL_SETTLE_TX = 'ChannelSettleTx',
        CHANNEL_SNAPSHOT_SOLO_TX = 'ChannelSnapshotSoloTx',
        CHANNEL_SET_DELEGATES_TX = 'ChannelSetDelegatesTx',
        ORACLE_REGISTER_TX = 'OracleRegisterTx',
        ORACLE_EXTEND_TX = 'OracleExtendTx',
        ORACLE_QUERY_TX = 'OracleQueryTx',
        ORACLE_RESPOND_TX = 'OracleRespondTx',
        NAME_PRECLAIM_TX = 'NamePreclaimTx',
        NAME_CLAIM_TX = 'NameClaimTx',
        NAME_UPDATE_TX = 'NameUpdateTx',
        NAME_TRANSFER_TX = 'NameTransferTx',
        NAME_REVOKE_TX = 'NameRevokeTx',
        CONTRACT_CREATE_TX = 'ContractCreateTx',
        CONTRACT_CALL_TX = 'ContractCallTx',
        GAATTACH_TX = 'GAAttachTx',
        GAMETA_TX = 'GAMetaTx',
        PAYING_FOR_TX = 'PayingForTx',
    }


}

