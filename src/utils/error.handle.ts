import { Response } from 'express'

const handleHttp = (res: Response, error: string) => {
  res.status(500).json({ error })
  res.send({ error })
}

export { handleHttp }
// eslint-disable-next-line no-multiple-empty-lines

