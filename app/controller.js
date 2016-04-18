var Persona = require('./modelo/persona');
var Asignatura = require('./modelo/subject');

// Obtiene todos los objetos Persona de la base de datos
exports.getPersona = function (req, res){
    Persona.find(
        function(err, persona) {
            if (err)
                res.send(err)
            res.json(persona); // devuelve todas las Personas en JSON
        }
    );
}

// Guarda un objeto Persona en base de datos
exports.setPersona = function(req, res) {

    // Creo el objeto Persona
    Persona.create(
        {nombre : req.body.nombre,direccion: req.body.direccion, telefono: req.body.telefono, },
        function(err, persona) {
            if (err)
                res.send(err);
            // Obtine y devuelve todas las personas tras crear una de ellas
            Persona.find(function(err, persona) {
                if (err)
                    res.send(err)
                res.json(persona);
            });
        });

}

// Modificamos un objeto Persona de la base de datos
exports.updatePersona = function(req, res){
    Persona.update( {_id : req.params.persona_id},
        {$set:{nombre : req.body.nombre,direccion: req.body.direccion, telefono: req.body.telefono}},
        function(err, persona) {
            if (err)
                res.send(err);
            // Obtine y devuelve todas las personas tras crear una de ellas
            Persona.find(function(err, persona) {
                if (err)
                    res.send(err)
                res.json(persona);
            });
        });
}

// Elimino un objeto Persona de la base de Datos
exports.removePersona = function(req, res) {
    Persona.remove({_id : req.params.persona_id}, function(err, persona) {
        if (err)
            res.send(err);
        // Obtine y devuelve todas las personas tras borrar una de ellas
        Persona.find(function(err, persona) {
            if (err)
                res.send(err)
            res.json(persona);
        });
    });
}

exports.getAsignaturas= function (req, res){
    Asignatura.find(
        function(err, asignatura) {
            if (err)
                res.send(err)
            res.json(asignatura); // devuelve todas las asignaturas en JSON
        }
    );
}

exports.getAsignatura= function (req, res){
    Asignatura.find( {_id : req.params.subject_id}, function(err, persona)
    {
        if (err)
            res.send(err);
        // Obtine y devuelve todas las personas tras borrar una de ellas
        Asignatura.find(function(err, persona) {
            if (err)
                res.send(err)
            res.json(persona);
        });
    });
}




exports.setAsignatura = function(req, res) {

    // Creo el objeto Asignatura
    Asignatura.create(
        {asignatura : req.body.asignatura, students: req.body.students},
        function(err, asignatura) {
            if (err)
                res.send(err);

            Asignatura.find(function(err, asignatura) {
                if (err)
                    res.send(err)
                res.json(asignatura);
            });
        });

}
// Elimino un objeto Persona de la base de Datos
exports.removeAsignatura = function(req, res) {
    Asignatura.remove({_id : req.params.subject_id}, function(err, persona) {
        if (err)
            res.send(err);
        // Obtine y devuelve todas las personas tras borrar una de ellas
        Asignatura.find(function(err, persona) {
            if (err)
                res.send(err)
            res.json(persona);
        });
    });
}


