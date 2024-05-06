import express from 'express';
import path from 'path';
import { addUser, userLogin } from '../controllers/userControllers.js'
import { checkCredencialesExists} from '../middlewares/middlewares.js'
const __dirname = path.resolve();
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {
        title: 'home',
    })
})

router.get('/login', (req, res) => {
    res.render('login', {
        title: 'login',
    })
})

router.get('/register', (req, res) => {
    res.render('register', {
        title: 'register',
    })
})

router.get('/products', (req, res) => {
    res.render('products', {
        title: 'products',
        productos: ['camisa', 'pantalon', 'zapatos']
    })
})

router.get('/muestra', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

router.get('/muestra2', (req, res) => {
    res.send('Esto es una prueba')
})

router.get('/url', (req, res) => {
    res.redirect('https://google.com')
})

router.post('/register', checkCredencialesExists, addUser)

router.post('/login', userLogin)

router.get('/profile', (req, res) => {
    res.render('profile', {
        title: 'Perfil',
    })
})

export default router