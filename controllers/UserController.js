const {encrypt, compare} = require('../Helpers/HandleByCript')
const User = require('../Models/User');
const cookieParser = require('cookie-parser')


const registerCtrl = async (req, res) => {
    const { user, email, password } = req.body;
  try {
    const newUser = await User.register(user, email, password);
    res.status(201).send(newUser);
    console.log("newUser")
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const loginCtrl = async (req, res) => {
    const { password, user } = req.body;
    try {
        const login = await User.login(user, password);
        console.log(login)
        res.cookie('token', login, {
          httpOnly: true,
          secure: false, // Cambia a true si usas HTTPS
          sameSite: 'None' // Configuración adecuada para cookies en cross-origin
      });
        res.send(login)
      } catch (err) {
        res.status(400).send(err.message);
      }
};

module.exports = { registerCtrl, loginCtrl }