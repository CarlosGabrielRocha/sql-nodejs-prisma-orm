const { Router } = require("express");
const customersController = require("../controllers/customers-controller");

const customersRouter = Router()

module.exports = customersRouter

customersRouter.get('/', customersController.index)
customersRouter.get('/:id', customersController.show)

customersRouter.post('/', customersController.create)

customersRouter.put('/:id', customersController.update)

customersRouter.delete('/:id', customersController.delete)