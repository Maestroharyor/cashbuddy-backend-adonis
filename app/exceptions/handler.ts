import app from '@adonisjs/core/services/app'
import { HttpContext, ExceptionHandler } from '@adonisjs/core/http'
import { errors as vineErrors } from '@vinejs/vine'
import { errors as adonisErrors } from '@adonisjs/core'
import { errors } from '@adonisjs/lucid'

export default class HttpExceptionHandler extends ExceptionHandler {
  /**
   * In debug mode, the exception handler will display verbose errors
   * with pretty printed stack traces.
   */
  protected debug = !app.inProduction

  /**
   * The method is used for handling errors and returning
   * response to the client
   */
  async handle(error: unknown, ctx: HttpContext) {
    if (error instanceof vineErrors.E_VALIDATION_ERROR) {
      return ctx.response
        .status(422)
        .send({ success: false, message: error.messages[0].message, error: error.messages })
    }

    if (error instanceof errors.E_RUNTIME_EXCEPTION) {
      return ctx.response.status(422).send({ success: false, message: error.message })
    }

    if (error instanceof adonisErrors.E_ROUTE_NOT_FOUND) {
      return ctx.response.status(404).send({ success: false, message: 'Route not found' })
    }

    if ((error as any).code === 'ER_DUP_ENTRY') {
      return ctx.response.status(422).send({ success: false, message: 'Duplicate entry' })
    }

    // return super.handle(error, ctx)
    const getErrorMessage = (errorTyped: any) => {
      if (errorTyped?.sqlMessage) {
        return errorTyped.sqlMessage
      }

      if (errorTyped?.message) {
        return errorTyped.message
      }
      return 'An error occurred'
    }

    return ctx.response.status(500).send({ success: false, message: getErrorMessage(error), error })
  }

  /**
   * The method is used to report error to the logging service or
   * the third party error monitoring service.
   *
   * @note You should not attempt to send a response from this method.
   */
  async report(error: unknown, ctx: HttpContext) {
    return super.report(error, ctx)
  }
}
