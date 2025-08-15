const pg = require('pg');

// Connection string: protocolo://usuario:senha@host:porta/nome_do_banco
const db = new pg.Client({
  connectionString: 'postgres://gabriel:gabriel@localhost:5432/node_postgres'
});

async function  createTable() {
  await db.connect();
  // O postgres transforma tudo em minúsculas por padrão mas caso você deseje especificar pra usar outro formato com maiúsculas por exemplo, você pode colocar entre ""
  const query = `
    CREATE TABLE IF NOT EXISTS "public"."Pokemon" (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      type VARCHAR(255)
    )
  `
  const result = await db.query(query);
  console.log(result);

  await db.end();
}

createTable();