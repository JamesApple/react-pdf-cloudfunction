import { Request, Response } from 'express'

export abstract class BaseHTTPFunction {
  protected req: Request
  private res: Response

  protected abstract call(): Promise<void | any>

  constructor(req: Request, res: Response) {
    this.req = req
    this.res = res
  }

  protected respond(code: number, message: string) {
    return this.res.status(code).json({ message })
  }

  protected ok<T>(dto?: T) {
    if (!!dto) {
      return this.res.status(200).json(dto)
    } else {
      return this.respond(200, JSON.stringify({ status: 'ok' }))
    }
  }

  protected clientError(message?: string) {
    return this.respond(400, message ? message : 'Unauthorized')
  }

  protected serverError(error: Error | string) {
    return this.res.status(500).json({
      message: error.toString(),
    })
  }
}
