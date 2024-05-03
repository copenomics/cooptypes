/**
 * Пространство действий для работы с реестрами.
 * @private
 */
export * as Registry from './registry'

/**
 * Пространство действий для работы с адресами кооператива.
 */
export * as Addresses from './addresses'

/**
 * Пространство атомарных действий для работы с кошельками пайщиков.
 * Все методы являются приватными и вызываются только смарт-контрактами.
 * @private
 */
export * as Wallet from './wallet'

/**
 * Пространство действий для работы с целевыми потребительскими программами.
 */
export * as Programs from './programs'

/**
 * Пространство решений членов совета.
 */
export * as Decisions from './decisions'

/**
 * Пространство управления собраниями и советами.
 */
export * as Boards from './boards'
