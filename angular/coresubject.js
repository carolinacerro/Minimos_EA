angular.module('MainApp', [])

function subjectController($scope, $http) {
    $scope.newasignatura = {};
    $scope.asignaturas = {};
    $scope.selected = false;

    // Obtenemos todos los datos de la base de datos
    $http.get('/api/subject').success(function(data) {
            $scope.asignaturas = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // Función para registrar a una persona
    $scope.registrarAsignatura = function() {
        $http.post('/api/subject', $scope.newasignatura)
            .success(function(data) {
                $scope.newasignatura = {}; // Borramos los datos del formulario
                $scope.assignaturas = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };


    // Función que borra un objeto persona conocido su id
    $scope.borrarAsignatura = function(newasignatura) {
        $http.delete('/api/asignatura/' + $scope.newasignatura._id)
            .success(function(data) {
                $scope.newasignatura = {};
                $scope.asignaturas = data;
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
        console.log($scope.newasignatura, $scope.selected);
    };
}