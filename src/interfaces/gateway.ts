// Generated by eosio-abi2ts 1.2.2 - eosio::abi/1.2

export type IAsset = string
export type IName = string
export type IChecksum256 = string
export type IPublicKey = string
export type ISignature = string
export type ITimePointSec = string
export type IUint64 = number | string

export interface IBalances extends IBalancesBase {
}

export interface IBalancesBase {
  id: IUint64
  contract: IName
  quantity: IAsset
}

export interface ICounts extends ICountsBase {
}

export interface ICountsBase {
  key: IName
  secondary_key: IName
  value: IUint64
}

export interface IDeposit {
  coopname: IName
  username: IName
  type: IName
  quantity: IAsset
}

export interface IDeposits {
  id: IUint64
  username: IName
  coopname: IName
  type: IName
  token_contract: IName
  quantity: IAsset
  status: IName
  link: string
  memo: string
  expired_at: ITimePointSec
}

export interface IDocument {
  hash: IChecksum256
  public_key: IPublicKey
  signature: ISignature
  meta: string
}

export interface IDpcomplete {
  coopname: IName
  admin: IName
  deposit_id: IUint64
  memo: string
}

export interface IDpfail {
  coopname: IName
  admin: IName
  deposit_id: IUint64
  memo: string
}

export interface INewdepositid {
  username: IName
  id: IUint64
}

export interface INewwithdrid {
  username: IName
  id: IUint64
}

export interface IWithdraw {
  coopname: IName
  username: IName
  quantity: IAsset
  document: IDocument
  bank_data_id: string
  memo: string
}

export interface IWithdrawauth {
  coopname: IName
  withdraw_id: IUint64
}

export interface IWithdraws {
  id: IUint64
  username: IName
  coopname: IName
  bank_data_id: string
  token_contract: IName
  quantity: IAsset
  status: IName
  document: IDocument
  memo: string
  created_at: ITimePointSec
}

export interface IWthdcomplete {
  coopname: IName
  admin: IName
  withdraw_id: IUint64
  memo: string
}

export interface IWthdfail {
  coopname: IName
  admin: IName
  withdraw_id: IUint64
  memo: string
}
