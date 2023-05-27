import { NextFunction, Request, Response } from 'express'

const logMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  console.log('🚀 ~ file: log.ts ~ line 1 ~ req')
  const userAgent = req.headers
  console.log('🚀 ~ file: log.ts ~ line 3 ~ userAgent', userAgent)
  next()
}
export { logMiddleware }
// eslint-disable-next-line no-multiple-empty-lines

