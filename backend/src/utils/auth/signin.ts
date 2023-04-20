import { Request, Response, NextFunction } from 'express'
import { User, IUserInterface } from '../../resources/user/user.model'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'

dotenv.config()

export const signinWithEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.email) {
    return next()
  }
  try {
    const user = await User.findOne({
      email: req.body.email
    })

    if (!user) {
      res.locals.json = {
        statusCode: 401,
        message: 'Incorrect email or password'
      }
      return next()
    }

    console.log("found the user", user)

    const isMatched = await bcrypt.compare(req.body.password, user.password)
    if (!isMatched) {
      res.locals.json = {
        statusCode: 401,
        message: 'Incorrect email or password'
      }
      return next()
    }

    console.log("passwords match as well")
    const token = JWT.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET)
    res.locals.json = {
      statusCode: 200,
      data: {
        token: token
      }
    }
    return next()
  } catch (error) {
    res.locals.json = {
      statusCode: 500,
      message: error.message
    }
    return next()
  }
}


export const signinWithId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.phoneNumber) {
    return next()
  }
  const { _id, password } = req.body
  try {
    const user = await User.findOne({
      _id: _id
    })

    if (!user) {
      res.locals.json = {
        statusCode: 401,
        message: 'Incorrect email or password'
      }
      return next()
    }

    const isMatched = await bcrypt.compare(password, user.password)
    if (!isMatched) {
      res.locals.json = {
        statusCode: 401,
        message: 'Incorrect email or password'
      }
      return next()
    }

    const token = JWT.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET)
    res.locals.json = {
      statusCode: 200,
      data: {
        token: token
      }
    }
    return next()
  } catch (error) {
    res.locals.json = {
      statusCode: 500,
      message: error
    }
    return next()
  }
}
