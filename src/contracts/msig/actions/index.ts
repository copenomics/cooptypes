/**
 * Создает предложение мультиподписи `proposal_name` от имени `proposer`, которое требует одобрения от аккаунтов,
 * указанных в `requested`. Предложение содержит транзакцию `trx`, которая выполнится, если получит все нужные подписи.
 * Если такое предложение уже существует, оно будет заменено новым.
 */
export * as ProposeTransaction from './proposeTransaction'

/**
 * Утверждает предложение `proposal_name`, созданное аккаунтом `proposer`, используя разрешение `level`.
 * При успехе переносят разрешение `level` из списка ожидающих в список предоставленных одобрений предложения.
 * Расходы на изменение состояния хранилища берет на себя `proposer`.
 */
export * as ApproveProposal from './approveProposal'

/**
 * Отзывает утверждение транзакцию под названием `proposal_name`, созданную аккаунтом `proposer`, используя разрешение `level`.
 * Перемещает разрешение `level` обратно в список ожидающих одобрения.
 */
export * as UnapproveProposal from './unapproveProposal'

/**
 * Отменяет предложение `proposal_name`, созданное аккаунтом `proposer`. Может отменить только создатель предложения
 * `proposer` или другой аккаунт после истечения срока допустимости предложения.
 */
export * as CancelProposal from './cancelProposal'

/**
 * Исполняет предложение мультиподписи `proposal_name`, созданное `proposer`, аккаунтом `executer`.
 * Условия выполнения: `executer` должен иметь авторизацию, предложение должно существовать, получены все необходимые утверждения,
 * срок допустимости предложения не истек, и ни одно из утвердивших разрешений не инвалидировано.
 * Предложение исполняется как отложенная транзакция и удаляется из таблицы.
 */
export * as ExecProposal from './execProposal'

/**
 * Действие, которое делает недействительными все неподтвержденные предложения мультиподписи для аккаунта `account`.
 * После его вызова любые подписи от `account` для текущих и будущих предложений игнорируются, пока аккаунт снова не участвует в мультиподписи.
 * Используется в случае, если ключи к аккаунту были скомпроментированы.
 * @prop account - EOSIO аккаунт, который используется для инвалидации подписей
 */
export * as InvalidateProposal from './invalidateAccount'
