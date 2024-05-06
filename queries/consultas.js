import pool from '../config/db.js';


const addUserQueries = async (email, password, rol, language) => {
    try {
        const query = {
            text: "INSERT INTO users (email, password, rol, language) VALUES($1, $2, $3, $4) RETURNING *",
            values: [email, password, rol, language]
        }
        const { rowCount } = await pool.query(query)
    } catch (error) {
        if (error.code === '23505') throw { code: 409, message: "El usuario ya existe" }
    }
}

export {
    addUserQueries
}