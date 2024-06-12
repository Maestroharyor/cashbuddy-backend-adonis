import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async index(ctx: HttpContext) {
    const users = await User.all()
    return { data: users || [] }
  }

  async store(ctx: HttpContext) {
    const user = await User.create({
      firstName: 'Virk',
      lastName: 'Walter',
      username: 'virk',
      email: 'XsQ2z@example.com',
      phoneNumber: '555-555-5555',
      country: 'NGN',
      userRole: 'admin',
      password: 'password',
    })
    return user
  }
}
