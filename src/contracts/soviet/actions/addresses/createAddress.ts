import * as Permissions from '../../../../common/permissions'
import type * as Soviet from '../../../../interfaces/soviet'
import { Actors } from '../../../../common'

/**
 * Действие выполняется за подписью {@link Actors._chairman | председателя}.
 */
export const authorizations = [{ permissions: [Permissions.active], actor: Actors._chairman }] as const

/**
 * Имя действия
 */
export const actionName = 'creaddress'

/**
 * @interface
 * Действие создаёт новый адрес.
 */
export type ICreateAddress = Soviet.ICreaddress
