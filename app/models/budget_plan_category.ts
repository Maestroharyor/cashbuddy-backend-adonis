import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class BudgetPlanCategory extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare categoryTitle: string

  @column()
  declare percent: number

  @column()
  declare color: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
