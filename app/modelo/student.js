var mongoose = require('mongoose');

module.exports = mongoose.model('student', {
    nombre: String,
    address: String,
    phone: {
        home: Number,
        work: Number
    }
});