const mongoose = require('mongoose');
const { tokenSign } = require('../Helpers/GenerateToken');
const {encrypt, compare} = require('../Helpers/HandleByCript');

const UserSchema = new mongoose.Schema({
    user: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: {type: String, default: 'user'}
});

UserSchema.methods.saludar = function() {
    return `Hola, mi nombre es ${this.user}`;
};

UserSchema.statics.register = async function(user, email, password) {
    const passwordHash = await encrypt(password);
    const newUser = new this({
        user: user,
        password: passwordHash,
        email: email
    })
    newUser.save();
}

UserSchema.statics.login = async function(userName, passwordName) {
    const userFind = await this.findOne({ user: userName });
    if (!userFind) {
      throw new Error('usuario no registrado');
    }
    const esValida = await compare(passwordName, userFind.password);
    if (!esValida) {
      throw new Error('Contraseña incorrecta');
    }
    const token = await tokenSign(userFind);
    return token;
  };

module.exports = mongoose.model('User', UserSchema);