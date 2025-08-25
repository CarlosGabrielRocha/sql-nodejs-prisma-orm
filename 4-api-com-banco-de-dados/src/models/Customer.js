const { query } = require("../database")
const HttpError = require("../errors/HttpError")

class Customer {
  constructor(customerRow) {
    this.id = customerRow.id
    this.name = customerRow.name
    this.email = customerRow.email
  }

  static async findAll() {
    const customers = await query(`SELECT * FROM customers;`)
    return customers.rows.map(row => new Customer(row))
  }

  static async find(id) {
    const customer = await query(`SELECT * FROM customers WHERE id = $1`, [id])
    if (!customer.rows[0]) throw new HttpError(404, 'Customer Not Found.')
    return new Customer(customer.rows[0])
  }

  static async create(attributes) {
    const customer = await query(`
      INSERT INTO customers (name, email) VALUES
        ($1, $2)
      RETURNING *
    `, [attributes.name, attributes.email]).then(result => result.rows[0])

    return new Customer(customer)
  }

  static async update(id, attributes) {
    const customer = await this.find(id)
    const result = await query(`
      UPDATE customers SET
        name = $1,
        email = $2
      WHERE id = $3
      RETURNING *;
    `, [attributes.name ?? customer.name, attributes.email ?? customer.email, id])

    return result.rows[0]
  }

  static async delete(id) {
    await this.find(id)
    await query(`DELETE FROM customers WHERE id = $1;`, [id])

    return { message: 'Customer deleted successfully.' }
  }
}

module.exports = Customer