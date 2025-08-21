const { query } = require("./pool");

async function newEvent(name, eventDate, ticketsTotal, soldTickets) {
  if (!typeof ticketsTotal === "number" || ticketsTotal < 0) return console.log('Query inválida!')
  if (typeof soldTickets === "number" && soldTickets < 0) return console.log('Query inválida!')

  const result = await query(`
    INSERT INTO "public"."events" (name, event_date, tickets_total, sold_tickets) VALUES
    ($1, $2, $3, $4);
  `, [name, eventDate, ticketsTotal, soldTickets ?? 0])

  console.log(result.command)
}

module.exports = newEvent