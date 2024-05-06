import pool from '../config/db.js';
import bcrypt from 'bcrypt';


const addUserQueries = async (email, password, rol, language) => {
    const hashedPassword = await bcrypt.hash(password, 10)
    password = hashedPassword
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

const userLoginQueries = async (email, password) => {
    try {
        const sql = {
            text: 'SELECT * FROM users WHERE email = $1',
            values: [email]
        }
        const { rows: usuario } = await pool.query(sql)
        const { password: hashedPassword } = usuario[0]
        const isPasswordValid = await bcrypt.compare(password, hashedPassword)
        if (!isPasswordValid) throw { code: 401, message: "Contraseña incorrecta" }
        

        console.log(usuario)
        return usuario
    } catch (error) {
        console.log(error)
    }
}

export {
    addUserQueries,
    userLoginQueries
}