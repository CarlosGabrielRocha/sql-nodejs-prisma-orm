const { query } = require("./pool")


async function createEventTable() {
  await query(
    `CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) UNIQUE NOT NULL,
      event_date DATE NOT NULL,
      tickets_total INT NOT NULL,
      sold_tickets INT NULL DEFAULT 0
    );`
  )

  process.exit(0)
}

module.exports = { createEventTable }
