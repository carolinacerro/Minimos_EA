angular.module('MainApp', [])

function mainController($scope, $http) {
    $scope.newPersona = {};
    $scope.personas = {};
    $scope.newAsignatura = {};
    $scope.Asignaturas = {};
    $scope.selected = false;

    // Obtenemos todos los datos de la base de datos
    $http.get('/api/persona').success(function(data) {
            $scope.personas = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // Función para registrar a una persona
    $scope.registrarPersona = function() {
        $http.post('/api/persona', $scope.newPersona)
            .success(function(data) {
                $scope.newPersona = {}; // Borramos los datos del formulario
                $scope.personas = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Función para editar los datos de una persona
    $scope.modificarPersona = function(newPersona) {
        $http.put('/api/persona/' + $scope.newPersona._id, $scope.newPersona)
            .success(function(data) {
                $scope.newPersona = {}; // Borramos los datos del formulario
                $scope.personas = data;
                $scope.selected = false;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Función que borra un objeto persona conocido su id
    $scope.borrarPersona = function(newPersona) {
        $http.delete('/api/persona/' + $scope.newPersona._id)
            .success(function(data) {
                $scope.newPersona = {};
                $scope.personas = data;
                $scope.selected = false;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Función para coger el objeto seleccionado en la tabla
    $scope.selectPerson = function(persona) {
        $scope.newPersona = persona;
        $scope.selected = true;
        console.log($scope.newPersona, $scope.selected);
    };

    // Obtenemos todos los datos de la base de datos
    $http.get('/api/subject').success(function(data) {
        console.log(data);
            $scope.Asignaturas = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // Función para registrar a una Asignatura
    $scope.registrarAsignatura = function() {
        $http.post('/api/subject', $scope.newAsignatura)
            .success(function(data) {
                $scope.newAsignatura = {}; // Borramos los datos del formulario
                $scope.Assignaturas = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };


    // Función que borra un objeto asignatura conocido su id
    $scope.borrarAsignatura = function(newAsignatura) {
        $http.delete('/api/asignatura/' + $scope.newAsignatura._id)
            .success(function(data) {
                $scope.newAsignatura = {};
                $scope.Asignaturas = data;
                $scope.selected = false;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Función para coger el objeto seleccionado en la tabla
    $scope.selectAsignatura = function(asignatura) {
        $scope.newAsignatura = asignatura;
        $scope.selected = true;
        console.log($scope.newAsignatura, $scope.selected);
    };
}
function mainController2($scope, $http) {
    $scope.newAsignatura = {};
    $scope.Asignaturas = {};
    $scope.selected = false;


    // Obtenemos todos los datos de la base de datos
    $http.get('/api/subject').success(function(data) {
            console.log(data);
            $scope.Asignaturas = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // Función para registrar a una Asignatura
    $scope.registrarAsignatura = function() {
        $http.post('/api/subject', $scope.newAsignatura)
            .success(function(data) {
                $scope.newAsignatura = {}; // Borramos los datos del formulario
                $scope.Assignaturas = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };


    // Función que borra un objeto asignatura conocido su id
    $scope.borrarAsignatura = function(newAsignatura) {
        $http.delete('/api/asignatura/' + $scope.newAsignatura._id)
            .success(function(data) {
                $scope.newAsignatura = {};
                $scope.Asignaturas = data;
                $scope.selected = false;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Función para coger el objeto seleccionado en la tabla
    $scope.selectAsignatura = function(asignatura) {
        $scope.newAsignatura = asignatura;
        $scope.selected = true;
        console.log($scope.newAsignatura, $scope.selected);
    };
}