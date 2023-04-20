import express from 'express'
import {
  signUpWithEmail
} from './signup'
import { signinWithEmail } from './signin'
import { respond } from '../../middlewares/respond'
import { verifyToken } from '../../middlewares/verifyToken'
import { changePassword } from './changePassword'
import { checkRequest } from '../../middlewares/checkRequest'
const authRouter = express.Router()

authRouter.post('/signup-with-email', signUpWithEmail, respond)
authRouter.post(
  '/login',
  checkRequest,
  signinWithEmail,
  respond
)
authRouter.put('/changePassword', verifyToken, changePassword, respond)

export default authRouter
