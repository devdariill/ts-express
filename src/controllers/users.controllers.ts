import { Request, Response } from 'express'
import { registerUser } from '../services/auth.service'
import { handleHttp } from '../utils/error.handle'

// getUsar, postUser
const loginCtrl = async ({ body }: Request, res: Response) => {
}
const registerCtrl = async ({ body }: Request, res: Response) => {
  const { email, password, name, description } = body
  const response = await registerUser({ email, password, name, description })
  if (response == null) {
    return handleHttp(res, 'USER_ALREADY_EXIST')
  }
  res.json({ response })
}

export { loginCtrl, registerCtrl }
// eslint-disable-next-line no-multiple-empty-lines

