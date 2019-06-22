import { BaseHTTPFunction } from './BaseHTTPFunction'
import { create } from 'html-pdf'
import { test } from './templates'

export class ReactPDFFunction extends BaseHTTPFunction {
  async call() {
    const res = new Promise((resolve, reject) =>
      create(test).toBuffer((er, e) =>
        er ? reject(er) : resolve(e.toString('base64')),
      ),
    )
    try {
      return this.ok(await res)
    } catch (e) {
      return this.serverError(e)
    }
  }
}
