const { query } = require("./pool")

async function getEventByName(eventName) {
  const result = await query(`SELECT * FROM "events" WHERE name = $1;`, [eventName])
  if (!result.rows[0]) return 'Evento não encontrado'
  return result.rows[0]
}

module.exports = getEventByName