const Customer = require("../models/Customer")

const customersController = {
  // GET /customers
  index: async (req, res)  => {
    const customers = await Customer.findAll()
    res.json(customers)
  },

  // GET /customers/:id
  show: async (req, res)  => {
    const { id } = req.params
    const customer = await Customer.find(id)
    res.json(customer)
  },

  // POST /customers
  create: async (req, res)  => {
    const customer = await Customer.create(req.body)
    res.json(customer)
  },

  // PUT /customers/:id
  update: async (req, res)  => {
    const { id } = req.params
    const updatedCustomer = await Customer.update(id, req.body)
    res.json(updatedCustomer)
  },

  // DELETE /customers:id
  delete: async (req, res)  => {
    const { id } = req.params
    const result = await Customer.delete(id)
    res.json(result)
  }
}

module.exports = customersController