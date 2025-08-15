const pg = require('pg');

// Connection string: protocolo://usuario:senha@host:porta/nome_do_banco
const db = new pg.Client({
  connectionString: 'postgres://gabriel:gabriel@localhost:5432/node_postgres'
});

async function insertPokemon() {
  await db.connect();

  // Forma básica
  /*   const query = `INSERT INTO "public"."Pokemon" (name, type) VALUES ('Sprigatito', 'Grass');`;
    const result1 = await db.query(query);
    console.log(result1); */

  // Dados dinâmicos da forma errada!!! Injeção de código sql malicioso pode ocorrer.
/*   const name = "Fuecoco"
  const type = "fire"
  const result2 = await db.query(`INSERT INTO "Pokemon" (name, type) VALUES ('${name}', '${type}');`)
  console.log(result2) */

  // Dados dinâmicos da forma correta!

  const pokemon = { name: 'Quaxly', type: 'water' };
  const result3 = await db.query(
    `INSERT INTO "Pokemon" (name, type) VALUES ($1, $2);`,
    [pokemon.name, pokemon.type]
  );
  
  console.log(result3)

  await db.end()
}

insertPokemon();