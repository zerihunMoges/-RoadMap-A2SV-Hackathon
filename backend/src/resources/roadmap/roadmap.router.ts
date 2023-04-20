import { Router } from 'express'
import {
  createRoadmap,
  fetchAllRoadmaps,
  fetchMyOrganizationRoadmaps,
  enroll
} from './roadmap.controllers'
import { respond } from '../../middlewares/respond'
import { verifyToken } from '../../middlewares/verifyToken'
import { filterImage } from '../../middlewares/multer'
import { grant_access } from '../../middlewares/access'

const roadmapRouter = Router()
roadmapRouter.get(
  '/',
  fetchAllRoadmaps,
  respond
)

// roadmapRouter.get(
//   '/enrolled',
//   fetchAllRoadmaps,
//   respond
// )

roadmapRouter.get(
  '/my',
  verifyToken,
  fetchMyOrganizationRoadmaps,
  respond
)

roadmapRouter.post(
  '/',
  verifyToken,
  createRoadmap,
  respond
)

roadmapRouter.post(
  '/enroll/:id',
  verifyToken,
  enroll,
  respond
)


// userRouter.get('/:email', verifyToken, fetchUserByEmail, respond)
// userRouter.delete(
//   '/',
//   verifyToken,
//   grant_access('deleteOwn', 'profile'),
//   deleteAccount,
//   respond
// )
// userRouter.delete('/:email', verifyToken, removeUser, respond)
// userRouter.patch(
//   '/',
//   verifyToken,
//   grant_access('updateOwn', 'profile'),
//   filterImage.single('image'),
//   updateUser,
//   respond
// )
// userRouter.get(
//   '/',
//   verifyToken,
//   grant_access('readOwn', 'profile'),
//   fetchUserById,
//   respond
// )
// userRouter.post(
//   '/addAdmin',
//   verifyToken,
//   grant_access('update', ['student', 'profile']),
//   promote,
//   respond
// )
// userRouter.post(
//   '/updateStatus:id',
//   verifyToken,
//   grant_access('update', ['student', 'profile']),
//   updateAcademicStatus,
//   respond
// )
// userRouter.get(
//   '/isAdmin:id',
//   verifyToken,
//   grant_access('read', 'profile'),
//   isAdmin,
//   respond
// )
export = roadmapRouter
