const { query } = require("./pool");

async function getEvents() {
  const result = await query(`SELECT * FROM "events";`)
  return result.rows
}

module.exports = getEvents