// Generated by eosio-abi2ts 1.2.2 - eosio::abi/1.2

export type IName = string
export type IBytes = string | number[] | Uint8Array
export type ITimePoint = string
export type ITimePointSec = string
export type IUint8 = number
export type IUint16 = number
export type IUint32 = number
export type IChecksum256 = string

export interface IAction {
  account: IName
  name: IName
  authorization: IPermissionLevel[]
  data: IBytes
}

export interface IApproval {
  level: IPermissionLevel
  time: ITimePoint
}

export interface IApprovalsInfo {
  version: IUint8
  proposal_name: IName
  requested_approvals: IApproval[]
  provided_approvals: IApproval[]
}

export interface IApprove {
  proposer: IName
  proposal_name: IName
  level: IPermissionLevel
  proposal_hash: IChecksum256
}

export interface ICancel {
  proposer: IName
  proposal_name: IName
  canceler: IName
}

export interface IExec {
  proposer: IName
  proposal_name: IName
  executer: IName
}

export interface IExtension {
  type: IUint16
  data: IBytes
}

export interface IInvalidate {
  account: IName
}

export interface IInvalidation {
  account: IName
  last_invalidation_time: ITimePoint
}

export interface IOldApprovalsInfo {
  proposal_name: IName
  requested_approvals: IPermissionLevel[]
  provided_approvals: IPermissionLevel[]
}

export interface IPermissionLevel {
  actor: IName
  permission: IName
}

export interface IProposal {
  proposal_name: IName
  packed_transaction: IBytes
  earliest_exec_time?: ITimePoint
}

export interface IPropose {
  proposer: IName
  proposal_name: IName
  requested: IPermissionLevel[]
  trx: ITransaction
}

export interface ITransaction extends ITransactionHeader {
  context_free_actions: IAction[]
  actions: IAction[]
  transaction_extensions: IExtension[]
}

export interface ITransactionHeader {
  expiration: ITimePointSec
  ref_block_num: IUint16
  ref_block_prefix: IUint32
  max_net_usage_words: IUint32
  max_cpu_usage_ms: IUint8
  delay_sec: IUint32
}

export interface IUnapprove {
  proposer: IName
  proposal_name: IName
  level: IPermissionLevel
}