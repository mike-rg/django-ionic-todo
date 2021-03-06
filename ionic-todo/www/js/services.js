angular.module('app.services', ['ngResource'])


// install angular:
// $ npm install angular
// $ npm install angular-resource --save
.config(['$resourceProvider', '$httpProvider',
function($resourceProvider, $httpProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
    //$httpProvider.defaults.headers.common['X-CSRFToken'] = '{{csrf_token}}';
}])

// httpProvider
// Utilice $httpProvider para cambiar el comportamiento predeterminado
// del servicio $http

// resourceProvider
// Una 'factory' crea un 'resource object' que te permite interactuar
// con 'data sources' del RESTful del lado del servidor
.factory('Actividad', ['$resource', function($resource){
    return $resource('http://localhost:8000/api/actividades/:id/', null, {
    	// solicitud 'PUT' personalizada.
    	'update': { method : 'PUT' },
    });
}])

