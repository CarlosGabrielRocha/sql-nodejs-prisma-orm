const { Router } = require('express')
const productsController = require('../controllers/products-controller.js')

const productsRouter = Router()

productsRouter.get("/", productsController.index);
productsRouter.get("/:id", productsController.show);
productsRouter.post("/", productsController.create);
productsRouter.put("/:id", productsController.update);
productsRouter.delete("/:id", productsController.delete);

module.exports = productsRouter