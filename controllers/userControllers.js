import { addUserQueries, userLoginQueries } from '../queries/consultas.js'
import jwt from 'jsonwebtoken';
const { SECRET_KEY } = process.env
const addUser = async(req, res) => {
    try {
        const { email, password, rol, language } = req.body
        await addUserQueries(email, password, rol, language)
        res.redirect('/login')
    } catch (error) {
        res.status(error.code || 500).send(error.message) 
    }
}

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '3m' });
        let user = await userLoginQueries(email, password)
        console.log('user', user)
        console.log('token', token)
        
        
        if (!user) throw { code: 404, message: `No se encontró el usuario con este email ${email}` }
        
        res.render('profile', {
            title: 'Perfil',
            token,
            user
            
            
        })
    } catch (error) {
        res.status(error.code || 500).send(error.message) 
    }
}

export {
    addUser,
    userLogin
}