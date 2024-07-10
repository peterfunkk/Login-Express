const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index');
})

router.post('/register', (req, res) => {
    req.session.my_variable = "Hello world";
    res.redirect('/profile');
});

router.get('/profile', (req, res) => {
    console.log(req.session.my_variable);
    res.render('profile')
})

module.exports = router;