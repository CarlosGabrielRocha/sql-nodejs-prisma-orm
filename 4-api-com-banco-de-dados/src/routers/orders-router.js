const { Router } = require("express")
const ordersController = require("../controllers/orders-controller")

const ordersRouter = Router()

ordersRouter.get('/', ordersController.index)
ordersRouter.get('/:id', ordersController.show)

ordersRouter.post('/', ordersController.create)

ordersRouter.delete('/:id', ordersController.delete)

module.exports = ordersRouter