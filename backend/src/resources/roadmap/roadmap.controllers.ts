import { Request, Response, NextFunction } from 'express'
import { Roadmap } from './roadmap.model'
import { User } from '../user/user.model'
import JWT from 'jsonwebtoken'
import { generateToken } from '../../helpers/generateToken'
import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'
import { uploadImage } from '../../helpers/uploadImage'
import { grant_access } from '../../middlewares/access'
import { Lecture } from './lecture.model'
import mongoose from 'mongoose'
import { Pitstop } from './pitstop.model'


export const fetchAllRoadmaps = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const roadmaps = await Roadmap.find({}).populate("lectures")
  res.locals.json = {
    statusCode: 200,
    data: roadmaps
  }
  return next()
}


export const createRoadmap = async (
  req,
  res,
  next: NextFunction
) => {
  const { _id } = res.locals
  const user = await User.findById(_id)
  if (!user) {
    res.locals.json = {
      statusCode: 400,
      message: "User doesn't exist"
    }
    return next()
  }
  try {
  const stops = req.body.pitstops
  let finalStops = []
  for(let stop of stops){
    let finalLectures = []
    for(let lecture of stop.lectures){
      const newlecture = await Lecture.create({...lecture})
      finalLectures.push(newlecture)
    }

    const newstop = await Pitstop.create({...stop, lectures: finalLectures})
    finalStops.push(newstop)

  }

  var image: any
  if (req.file) {
    const result = await uploadImage(req.file)
    if (result) {
      image = result.data.secure_url
    }
  }

  const roadmap = await (await Roadmap.create({...req.body, pitstops: finalStops, organization: user, image: image})).populate({
    path: 'pitstops',
    // Get lectures of pitstops - populate the 'lectures' array for every pitstop
    populate: { path: 'lectures' }
  })

  await User.updateMany({ '_id': _id }, { $push: { roadmaps: roadmap._id } })

  res.status(200).json({ data: roadmap })
} catch (error) {
    res.status(500).json({error: error})
}
}

export const fetchMyOrganizationRoadmaps = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { _id } = res.locals

  const user = await (await User.findById(_id)).populate({
    path: "roadmaps",
    populate: { 
      path: "pitstops", 
      populate: { 
        path: "lectures"
      }}
  })

  if (!user) {
    res.locals.json = {
      statusCode: 400,
      message: 'user not found'
    }
    return next()
  }

  res.locals.json = {
    statusCode: 200,
    data: user.roadmaps
  }
  return next()
}

export const enroll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { _id } = res.locals

  const user = await (await User.findById(_id))
  const roadmap = await Roadmap.findById(req.params.id)

  if (!user) {
    res.locals.json = {
      statusCode: 400,
      message: 'user not found'
    }
    return next()
  }

  if (!roadmap) {
    res.locals.json = {
      statusCode: 400,
      message: 'roadmap not found'
    }
    return next()
  }

  await Roadmap.updateOne({"_id": _id}, { $inc: { enrolled: 1, "metrics.orders": 1 }})
  await User.updateMany({ '_id': _id }, { $push: { enrolled: roadmap._id } })
  const updatedUser = await User.findById(_id).populate({
    path: "roadmaps",
    populate: { 
      path: "pitstops", 
      populate: { 
        path: "lectures"
      }}
  })

  res.locals.json = {
    statusCode: 200,
    data: updatedUser
  }
  return next()
}

export const fetchEnrolled = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { _id } = res.locals

  const user = await (await User.findById(_id)).populate({
    path: "enrolled",
    populate: { 
      path: "pitstops", 
      populate: { 
        path: "lectures"
      }}
  })

  if (!user) {
    res.locals.json = {
      statusCode: 400,
      message: 'user not found'
    }
    return next()
  }

  res.locals.json = {
    statusCode: 200,
    data: user.enrolled
  }
  return next()
}