import { Router } from 'express'

const router = Router()

router.get('/items', (_, res) => {
  res.send({ data: 'Hello World!' })
})

export { router }
// eslint-disable-next-line no-multiple-empty-lines

