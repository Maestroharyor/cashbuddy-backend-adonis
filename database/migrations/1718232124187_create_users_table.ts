import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('username').notNullable().unique()
      table.string('email').notNullable().unique()
      table.string('password').notNullable()

      table.string('country').notNullable()
      table.string('phone_number').notNullable().unique()
      table.string('user_role').notNullable().checkIn(['subscriber', 'editor', 'manager', 'admin'])

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
