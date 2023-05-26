import { Response } from 'express'

const handleHttp = (res: Response, error: string, errorRaw?: any) => {
  console.log('🚀 ~ file: error.handle.ts:1 ~ handleHttp ~ errorRaw', errorRaw)
  res.status(500)
  res.send({ error })
}

export { handleHttp }
// eslint-disable-next-line no-multiple-empty-lines

