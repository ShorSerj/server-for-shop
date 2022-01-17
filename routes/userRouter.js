import Router from 'express'
const userRouter = new Router()
import UserController from '../controlers/userController.js'
import authMiddleware from '../middleware/authMiddleware.js'



userRouter.post('/registration', UserController.registration)
userRouter.post('/login', UserController.login)
userRouter.get('/auth', authMiddleware, UserController.check)


export default userRouter