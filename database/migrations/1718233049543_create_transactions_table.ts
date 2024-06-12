import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'transactions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('title').notNullable()
      table.string('details').notNullable()
      table.integer('amount').notNullable()
      table
        .integer('category_id')
        .unsigned()
        .references('id')
        .inTable('transaction_categories')
        .onDelete('CASCADE')
      table.integer('created_by').unsigned().references('id').inTable('users').onDelete('CASCADE')

      table.string('transaction_type').notNullable().checkIn(['income', 'expense'])

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
