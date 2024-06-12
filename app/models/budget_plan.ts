import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import BudgetCategory from './budget_category.js'

export default class BudgetPlan extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @hasOne(() => User)
  declare user: HasOne<typeof User>

  @column()
  declare isPrimaryPlan: boolean

  @column()
  declare categories: BudgetCategory[]

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
