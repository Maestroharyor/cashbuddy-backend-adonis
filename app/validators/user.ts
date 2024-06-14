import vine from '@vinejs/vine'

export const usersSignupValidator = vine.compile(
  vine.object({
    firstName: vine.string().trim(),
    lastName: vine.string().trim(),
    country: vine.string().optional(),
    phoneNumber: vine.string().trim().minLength(10).maxLength(10),
    email: vine.string().email(),
    password: vine.string().trim().minLength(8).maxLength(32).alphaNumeric(),
  })
)
