import Router from 'express'
import deviceController from '../controlers/deviceController.js'
const deviceRouter = new Router()

deviceRouter.post('/', deviceController.create)
deviceRouter.get('/', deviceController.getAll)
deviceRouter.get('/:id', deviceController.getOne)

export default deviceRouter