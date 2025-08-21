const { Pool } = require('pg')

const pool = new Pool({
  connectionString: 'postgresql://gabriel:gabriel@localhost:5432/node_postgres',
  max: 2
})

async function openConnection() {
  const client = await pool.connect()
  
  const result = await client.query("SELECT 1 + 1 AS soma;")
  console.log(result.rows)

  setTimeout(() => {
    client.release()
    console.log('Fechando conexão...')
  }, 5000)
}

openConnection()


setTimeout(() => {
  openConnection()
}, 1000)

setTimeout(() => {
  openConnection()
}, 2000)