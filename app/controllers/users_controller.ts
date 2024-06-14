import User from '#models/user'
import { usersSignupValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
import { generateUsername } from '../../utils/index.js'

export default class UsersController {
  async index(ctx: HttpContext) {
    const users = await User.all()
    return { data: users || [] }
  }

  async store(ctx: HttpContext) {
    // const user = await User.create({
    //   firstName: 'Virk',
    //   lastName: 'Walter',
    //   username: 'virk',
    //   email: 'XsQ2z@example.com',
    //   phoneNumber: '555-555-5555',
    //   country: 'NGN',
    //   userRole: 'admin',
    //   password: 'password',
    // })
    const { firstName, lastName, username, email, phoneNumber, country, password } =
      ctx.request.body
    const user = {
      firstName: 'Virk',
      lastName: 'Walter',
      username: 'virk',
      email: 'XsQ2z@example.com',
      phoneNumber: '555-555-5555',
      country: 'NGN',
      userRole: 'admin',
      password: 'password',
    }
    await usersSignupValidator.validate(user)
    // console.log(validation)
    return user
  }

  async signup(ctx: HttpContext) {
    const requestBody = ctx.request.body()

    const validatedData = await usersSignupValidator.validate(requestBody)
    const { firstName, lastName, email, phoneNumber, country, password } = validatedData
    const username = generateUsername(firstName, 4)

    const userRole: 'subscriber' | 'editor' | 'manager' | 'admin' = 'subscriber'
    const userData = {
      firstName,
      lastName,
      username,
      email,
      phoneNumber,
      password,
      userRole,
      country: 'NGN',
    }

    const user = await User.create(userData)

    return { success: true, message: 'User signed up', data: user }
  }

  async login(ctx: HttpContext) {
    return 'login'
  }
}
