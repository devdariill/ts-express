import { Router } from 'express'
import { loginCtrl, registerCtrl } from '../controllers/users.controllers'

const router = Router()

router.post('/register', registerCtrl)
router.post('/login', loginCtrl)

export default router
// eslint-disable-next-line no-multiple-empty-lines

