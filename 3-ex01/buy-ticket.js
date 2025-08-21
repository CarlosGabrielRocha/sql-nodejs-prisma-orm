const { query } = require("./pool")

async function buyTicket(eventName, quantity) {
  const eventResult = await query(`SELECT * FROM "events" WHERE name = $1;`, [eventName])
  const event = eventResult.rows[0]
  if (!event) return console.log('Evento não encontrado!')
  if (event.tickets_total - quantity < 0) return console.log('Ingressos esgotados!')
  if (new Date(event.event_date) < new Date()) return console.log('O evento já aconteceu!')

  const updatedTotalTickets = event.tickets_total -= quantity
  const updatedSoldTickets = event.sold_tickets += quantity
  await query(`
    UPDATE "events" SET tickets_total = $1, sold_tickets= $2 WHERE name = $3;
  `, [updatedTotalTickets, updatedSoldTickets, eventName])

  return console.log('Sucesso!')
}

module.exports = buyTicket