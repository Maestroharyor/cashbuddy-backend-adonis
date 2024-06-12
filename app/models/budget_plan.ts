import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'
import User from '#models/user'
import BudgetPlanCategory from '#models/budget_plan_category'

export default class BudgetPlan extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @hasOne(() => User)
  declare user: HasOne<typeof User>

  @column()
  declare isPrimaryPlan: boolean

  @hasMany(() => BudgetPlanCategory)
  declare categories: HasMany<typeof BudgetPlanCategory>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
