angular.module('app.controllers', [])

.controller('actividadesCtrl', ['$scope', 'Actividades',
function ($scope, Actividades) {
    $scope.header = 'Activity list';
    $scope.actividades = Actividades.query();
}])