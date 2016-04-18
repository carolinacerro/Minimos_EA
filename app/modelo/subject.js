var mongoose = require('mongoose');

module.exports = mongoose.model('Subject', {
    asignatura: String,
    students: String
    //{
      //  type: mongoose.Schema.Types.nombre, ref: 'Persona'
    //}
});