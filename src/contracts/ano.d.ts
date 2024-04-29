// Generated by eosio-abi2ts 1.2.2 - eosio::abi/1.2

declare namespace ano {
  export type IAsset = string
  export type IName = string
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

  export interface INewid {
    coop_id: IUint64
  }

}
