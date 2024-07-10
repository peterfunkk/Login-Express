const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/Users'; // Ajusta la URI de conexión según tu configuración

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log('Conectado a MongoDB');
  } catch (err) {
    handleError(err); // Salir del proceso si no se puede conectar a la base de datos
  }
}

module.exports = connectDB;