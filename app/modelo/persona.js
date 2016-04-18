var mongoose = require('mongoose');

module.exports = mongoose.model('Persona', {
    nombre: String,
    address: String,
    phone: {
        home: Number,
        work: Number
    }
});