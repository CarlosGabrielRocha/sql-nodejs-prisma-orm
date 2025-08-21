const buyTicket = require('./buy-ticket.js')
const { createEventTable } = require('./event.js')
const getEventByName = require('./get-event.js')
const getEventsByDate = require('./get-events-by-date.js')
const getEvents = require('./get-events.js')
const newEvent = require('./new-event.js')

//createEventTable()


/* newEvent('teste2', '2025-08-25', 10)
newEvent('teste3', '2025-08-25', 5)
newEvent('teste4', '2025-08-25', 8)
newEvent('teste5', '2025-08-25', 13)
newEvent('teste6', '2025-08-29', 5)
newEvent('teste7', '2025-08-29', 20)
newEvent('teste8', '2025-08-10', 20)
newEvent('teste9', '2025-08-03', 20)  */

/* newEvent('teste100', '2025-09-01', 5) */


// newEvent('teste11', '2025-08-03', 20)

/* getEvents().then(result => {
  console.log(result)
})
 */

/* getEventByName('teste3').then(result => {
  console.log(result)
}) */

getEventsByDate('2025-08-03').then(result => {
  console.log(result)
})

//buyTicket('teste3', 1)

