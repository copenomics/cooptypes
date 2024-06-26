// Generated by eosio-abi2ts 1.2.2 - eosio::abi/1.2

export type IName = string
export type IUint64 = number | string

export interface ICounts extends ICountsBase {
}

export interface ICountsBase {
  key: IName
  secondary_key: IName
  value: IUint64
}

export interface ICreatedraft {
  registry_id: IUint64
  lang: IName
  title: string
  description: string
  context: string
  model: string
  translation_data: string
}

export interface ICreatetrans {
  draft_id: IUint64
  lang: IName
  data: string
}

export interface IDeldraft {
  draft_id: IUint64
}

export interface IDeltrans {
  translate_id: IUint64
}

export interface IEdittrans {
  translate_id: IUint64
  data: string
}

export interface INewid {
  id: IUint64
}

export interface IOnedraft {
  id: IUint64
  registry_id: IUint64
  creator: IName
  actions: IName[]
  version: IUint64
  default_translation_id: IUint64
  title: string
  description: string
  context: string
  model: string
}

export interface ITranslation {
  id: IUint64
  creator: IName
  draft_id: IUint64
  lang: IName
  data: string
  is_published: boolean
  is_approved: boolean
}
