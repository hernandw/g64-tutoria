import { addUserQueries } from '../queries/consultas.js'

const addUser = async(req, res) => {
    try {
        const { email, password, rol, language } = req.body
        await addUserQueries(email, password, rol, language)
        res.redirect('/login')
    } catch (error) {
        res.status(error.code || 500).send(error.message) 
    }
}

export {
    addUser
}