var Persona = require('./modelo/persona');
var Asignatura = require('./modelo/subject');
var Controller = require ('./controller');

module.exports = function(app) {

    // devolver todos los Personas
    app.get('/api/persona', Controller.getPersona);
    // Crear una nueva Persona
    app.post('/api/persona', Controller.setPersona);
    // Modificar los datos de una Persona
    app.put('/api/persona/:persona_id', Controller.updatePersona);
    // Borrar una Persona
    app.delete('/api/persona/:persona_id', Controller.removePersona);
    // Listar  Asignaturas
    app.get('/api/subject', Controller.getAsignaturas);
    // Listar  una Asignatura
    app.get('/api/subject:subject_id', Controller.getAsignatura);
    // Crear una Asignatura
    app.post('/api/subject', Controller.setAsignatura);
    // Borrar una ASignatura
    app.delete('/api/subject/:subject_id', Controller.removeAsignatura);
    // Modificar los datos de una Persona
    //app.put('/api/subject/:subject_id', Controller.updateAsignatura);
    // application

    app.get('*', function(req, res) {
        res.sendfile('./angular/index.html'); // Carga única de la vista
    });
};