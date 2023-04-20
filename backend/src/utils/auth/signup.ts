import { Request, Response, NextFunction } from 'express'
import { User } from '../../resources/user/user.model'
import passwordComplexity from 'joi-password-complexity'
import Joi from 'joi'
import _ from 'lodash'
import { encrypt } from '../../helpers/encryptPassword'
export const signUpWithEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    email,
    password,
    firstName,
    lastName
  } = req.body
  const emailExists = await User.findOne({ email })
  if (emailExists) {
    res.locals.json = {
      statusCode: 400,
      message: 'Email already exsists'
    }
    return next()
  }
  const user = {
    email,
    password,
    firstName,
    lastName
  }
  try {
    const newUser = await createUser(
      email,
      password,
      firstName,
      lastName
    )
    res.locals.json = {
      statusCode: 201,
      data: newUser
    }
  } catch (error) {
    console.log('this is the thing')
    res.locals.json = {
      statusCode: 400,
      message: error.message
    }
  }
  return next()
}

const createUser = async (
  email: String,
  password: String,
  firstName: String,
  lastName: String
) => {
  const hashedPassword = await encrypt(password)
  const newUser = await User.create({
    email,
    password: hashedPassword,
    firstName,
    lastName
  })
}

const validateUser = async (email: String, otp: String) => {
  const user = await User.findOne({ email })
  if (!user) {
    return false
  }

  const updatedUser = await User.findByIdAndUpdate(user._id, {
    $set: { isVerified: true }
  })
  return updatedUser
}
