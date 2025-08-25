const Product = require("../models/Product")

const productsController = {
  // GET /products
  index: async (req, res) => {
    const products = await Product.findAll()
    console.log(products)
    res.json(products)
  },

  // POST /products
  create: async (req, res) => {
    const newProduct = await Product.create(req.body)
    res.status(201).json(newProduct)
  },

  // GET /products/:id
  show: async (req, res) => {
    const { id } = req.params
    const product = await Product.findByid(id)
    if (product === null) return res.status(404).json({ message: 'Product Not Found!'})
    res.json(product)
  },

  // PUT /products/:id 
  update: async (req, res) => {
    const { id } = req.params
    const updatedProduct = await Product.update(id, req.body)
    if (updatedProduct === null) return res.status(404).json({ message: 'Product Not Found!'})
    res.json(updatedProduct)
  },

  // DELETE /products/:id
  delete: async (req, res) => {
    const { id } = req.params
    const result = await Product.delete(id)
    if (result === null) return res.status(404).json({ message: 'Product Not Found!'})
    res.json(result)
  }
}

module.exports = productsController