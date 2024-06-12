import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import User from '#models/user'
import TransactionCategory from '#models/transaction_category'
import type { HasOne } from '@adonisjs/lucid/types/relations'

export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare details: string

  @hasOne(() => TransactionCategory)
  declare category: HasOne<typeof TransactionCategory>

  @column()
  declare amount: number

  @column()
  declare transactionType: 'income' | 'expense'

  @hasOne(() => User)
  declare createdBy: HasOne<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
