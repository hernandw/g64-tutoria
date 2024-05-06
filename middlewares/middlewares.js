export const checkCredencialesExists = (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400).send('Faltan datos obligatorios')
    } {
        next()
    }
    
}

export const tokenVerification = (req, res, next) => {
    const token = req.headers.authorization.split('Bearer ')[1];
    if(!token) {
        res.status(400).send('Falta token')
    }
    const tokenValido = jwt.verify(token, SECRET_KEY);
    if(!tokenValido) {
        res.status(400).send('Token invalido')
    }
    res.render('profile', {
        title: 'Perfil',
    }
    )
}