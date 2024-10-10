const {encrypt, compare} = require('../Helpers/HandleByCript')
const User = require('../Models/User');
const cookieParser = require('cookie-parser')


const registerCtrl = async (req, res) => {
  const { user, email, password } = req.body;
  
  try {
      // Verificar si el usuario o el correo ya existen
      const existingUser = await User.findOne({ 
          $or: [ { user: user }, { email: email } ] 
      });

      if (existingUser) {
          // Verificar cuál de los datos está duplicado
          if (existingUser.user === user) {
              return res.status(400).json({error: "El nombre de usuario ya está en uso"});
          }
          if (existingUser.email === email) {
              return res.status(400).json({error:"El correo electrónico ya está en uso"});
          }
      }

      // Registrar el nuevo usuario
      const newUser = await User.register(user, email, password);
      const respuesta = { mensaje: "Success", estado: "201"}
      res.status(201).json(respuesta)

  } catch (error) {
      console.error(error);
      res.status(500).json({error:  "Error en el servidor"} );
  }
};


const loginCtrl = async (req, res) => {
    const { password, user } = req.body;
    try {
        const login = await User.login(user, password);
        console.log(login)
        res.cookie('jwt', login, {
          httpOnly: true,
          secure: false, // Cambia a true si usas HTTPS
          sameSite: 'None' // Configuración adecuada para cookies en cross-origin
      });
        res.send(login)
      } catch (err) {
        res.status(400).json({error:  "Error en el servidor"} );
      }
};

module.exports = { registerCtrl, loginCtrl }