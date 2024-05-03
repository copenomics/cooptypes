/**
 * Действие добавляет баланс токенов учёта паевого взноса в кошелёк пользователя.
 * @private
 */
export * as addBalance from './addBalance'

/**
 * Действие списывает баланс токенов учёта паевого взноса из кошелька пользователя.
 * @private
 */
export * as subBalance from './subBalance'

/**
 * Действие блокирует баланс токенов учёта паевого взноса в кошельке пользователя.
 * Вызывается смарт-контрактами при входе пайщика в целевую программу,
 * в процессе возврата паевого взноса до момента фактической выплаты, и т.д.
 * @private
 */
export * as blockBalance from './blockBalance'

/**
 * Действие разблокирует баланс токенов учёта паевого взноса в кошельке пользователя.
 * @private
 */
export * as unblockBalance from './unblockBalance'

/**
 * Действие добавляет баланс токенов учёта в целевую потребительскую программу кооператива.
 * @private
 */
export * as addProgramBalance from './addProgramBalance'

/**
 * Действие списывает баланс токенов учёта из целевой потребительской программы кооператива.
 * @private
 */
export * as subProgramBalance from './subProgramBalance'
