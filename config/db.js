import pg from 'pg';
const { Pool } = pg;
process.loadEnvFile()

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const pool = new Pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    allowExitOnIdle: true
})


const getDate = async() => {
    const { rows } = await pool.query('SELECT NOW()');
    console.log(rows);
    return rows

}

getDate()

export default pool