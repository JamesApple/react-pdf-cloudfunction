import { ReactPDFFunction } from './ReactPDFFunction'
import { Request, Response } from 'express'

export const reactPDF = (req: Request, res: Response) =>
  new ReactPDFFunction(req, res).call()
