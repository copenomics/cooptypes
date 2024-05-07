import * as Permissions from '../../../common/permissions'
import * as ContractNames from '../../../common/names'
import type * as System from '../../../interfaces/system'

export const authorizations = [{ permissions: [Permissions.active], actor: ContractNames._system }] as const

/**
 * Имя действия
 */
export const actionName = 'setacctram'

/**
 * @interface
 */
export type ISetRAMLimits = System.ISetacctram
