import * as Permissions from '../../../common/permissions'
import type * as System from '../../../interfaces/system'
import { Actors } from '../../../common'

export const authorizations = [{ permissions: [Permissions.active], actor: Actors._username }] as const

/**
 * Имя действия
 */
export const actionName = 'powerupexec'

/**
 * @interface
 */
export type IExecPowerup = System.IPowerupexec
