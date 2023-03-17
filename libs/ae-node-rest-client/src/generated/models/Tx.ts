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
    type: 'SpendTx' | 'ChannelCreateTx' | 'ChannelDepositTx' | 'ChannelWithdrawTx' | 'ChannelForceProgressTx' | 'ChannelCloseMutualTx' | 'ChannelCloseSoloTx' | 'ChannelSlashTx' | 'ChannelSettleTx' | 'ChannelSnapshotSoloTx' | 'ChannelSetDelegatesTx' | 'OracleRegisterTx' | 'OracleExtendTx' | 'OracleQueryTx' | 'OracleRespondTx' | 'NamePreclaimTx' | 'NameClaimTx' | 'NameUpdateTx' | 'NameTransferTx' | 'NameRevokeTx' | 'ContractCreateTx' | 'ContractCallTx' | 'GAAttachTx' | 'GAMetaTx' | 'PayingForTx';
} & (SpendTx | ChannelCreateTx | ChannelDepositTx | ChannelWithdrawTx | ChannelForceProgressTx | ChannelCloseMutualTx | ChannelCloseSoloTx | ChannelSlashTx | ChannelSettleTx | ChannelSnapshotSoloTx | ChannelSetDelegatesTx | OracleRegisterTx | OracleExtendTx | OracleQueryTx | OracleRespondTx | NamePreclaimTx | NameClaimTx | NameUpdateTx | NameTransferTx | NameRevokeTx | ContractCreateTx | ContractCallTx | GAAttachTx | GAMetaTx | PayingForTx));

