import * as Permissions from '../../../../common/permissions'
import * as ContractNames from '../../../../common/names'
import type * as Soviet from '../../../../interfaces/soviet'

/**
 * Действие выполняется автоматически по ходу работы системы за подписью одного из контрактов: {@link ContractNames._soviet | совета}, {@link ContractNames._gateway | шлюза} или {@link ContractNames._marketplace | маркетплейса}.
 */
export const authorizations = [
  { permissions: [Permissions.active], actor: ContractNames._soviet },
  { permissions: [Permissions.active], actor: ContractNames._gateway },
  { permissions: [Permissions.active], actor: ContractNames._marketplace },
] as const

/**
 * Имя действия
 */
export const actionName = 'addbalance'

/**
 * @interface
 * Действие добавляет баланс токенов учёта паевого взноса в кошелёк пользователя.
 * @private
 */
export type IAddBalance = Soviet.IAddbalance
