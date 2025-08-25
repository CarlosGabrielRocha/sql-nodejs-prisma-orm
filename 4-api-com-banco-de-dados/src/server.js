const express = require('express')
const productsRouter = require('./routers/products-router')
const customersRouter = require('./routers/customers-router')
const errorMiddleware = require('./middlewares/error-middleware')
const ordersRouter = require('./routers/orders-router')

const app = express()

app.use(express.json())

app.use("/api/products", productsRouter)
app.use("/api/customers", customersRouter)
app.use("/api/orders", ordersRouter)

app.use(errorMiddleware)

const PORT = 3000

app.listen(PORT, () => console.log(`servidor iniciado em http://localhost${PORT}/`))