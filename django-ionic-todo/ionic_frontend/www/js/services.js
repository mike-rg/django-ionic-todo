angular.module('app.services', ['ngResource'])


// install angular:
// $ npm install angular
// $ npm install angular-resource --save
.config(['$resourceProvider', '$httpProvider',
function($resourceProvider, $httpProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}])

// httpProvider
// Utilice $httpProvider para cambiar el comportamiento predeterminado
// del servicio $http

// resourceProvider
// Una 'factory' crea un 'resource object' que te permite interactuar
// con 'data sources' del RESTful del lado del servidor
.factory('Actividades', ['$resource', function($resource){
    return $resource('http://localhost:8000/lista_de_actividades/');
}])