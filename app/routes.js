var student = require('./modelo/student');
var subject = require('./modelo/subject');
var Controller = require ('./controller');

module.exports = function(app) {

    // devolver todos los Personas
    app.get('/api/student', Controller.getStudent);
    // Crear una nueva Persona
    app.post('/api/student', Controller.setStudent);
    // Modificar los datos de una Persona
    app.put('/api/student/:student_id', Controller.updateStudent);
    // Borrar una Persona
    app.delete('/api/student/:student_id', Controller.removeStudent);
    // devolver Asignaturas
    app.get('/api/subject', Controller.getSubject);
    // Listar una Asignatura
    app.get('/api/subject/:subject_id', Controller.getSubject);
    // Crear una Asignatura
    app.post('/api/subject', Controller.setSubject);
    // application
    app.get('*', function(req, res) {
        res.sendfile('./angular/index.html'); // Carga única de la vista
    });
};