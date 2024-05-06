export const checkCredencialesExists = (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400).send('Faltan datos obligatorios')
    } {
        next()
    }
    
}