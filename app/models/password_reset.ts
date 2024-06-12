import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import User from '#models/user'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class PasswordReset extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @hasOne(() => User)
  declare user: HasOne<typeof User>

  @column()
  declare token: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
