import * as Permissions from '../../../common/permissions'
import type * as Token from '../../../interfaces/token'
import { Actors } from '../../../common'

/**
 * Требуется авторизация владельца аккаунта, чей баланс закрывается.
 */
export const authorizations = [{ permissions: [Permissions.active], actor: Actors._username }] as const

/**
 * Имя действия
 */
export const actionName = 'close'

/**
 * @interface
 */
export type IClose = Token.IClose
