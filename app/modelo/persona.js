var mongoose = require('mongoose');

module.exports = mongoose.model('Persona', {
    nombre: String,
    direccion: String,
    telefono: Number
    //{
    //home: Number,
    //work: Number
    // }
});