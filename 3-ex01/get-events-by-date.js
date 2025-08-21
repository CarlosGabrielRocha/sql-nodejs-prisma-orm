const { query } = require("./pool")

async function getEventsByDate(date) {
  const result = await query(`SELECT * FROM "events" WHERE event_date = $1;`, [date])
  return result.rows
}

module.exports = getEventsByDate