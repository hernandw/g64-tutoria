import express from 'express';
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

export default router