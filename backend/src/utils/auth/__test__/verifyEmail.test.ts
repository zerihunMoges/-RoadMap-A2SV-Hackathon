import { app } from '../../../server'
import supertest from 'supertest'
import { setUp, dropCollections, dropDatabase } from '../../db/connect'
import { User } from '../../../resources/user/user.model'
let mongoServer: any
jest.setTimeout(10000)
beforeAll(async () => {
  await setUp()
  const user = await User.create({
    email: 'testEmail@gmail.com',
    firstName: 'testt',
    lastName: 'father name',
    password: '82482asf:'
  })
  await user.save()

  const user2 = await User.create({
    email: 'testEmail2@gmail.com',
    firstName: 'testt',
    lastName: 'father name',
    password: '82482asf:'
  })
}, 3000)

afterAll(async () => {
  await dropCollections()
  await dropDatabase()
}, 3000)

describe('verify email Test', () => {
  it('return status code 400 if the user with that email is not found', async () => {
    const response = await supertest(app)
      .post('/api/v1/auth/verify')
      .send({
        email: 'nonExisitentemail@gmail.com',
        otp: '123456'
      })
      .expect(400)
    expect(response.body.message).toBe('Wrong verification code')
  })
  it('return status code 400 if the email is already verified', async () => {
    const response = await supertest(app)
      .post('/api/v1/auth/verify')
      .send({
        email: 'testEmail@gmail.com',
        otp: '123456'
      })
      .expect(400)
    expect(response.body.message).toBe('User is already Verified')
  })
})
