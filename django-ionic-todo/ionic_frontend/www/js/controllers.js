angular.module('app.controllers', ['ionic'])

// $routeParams,
.controller('actividadCtrl', ['$resource', '$scope', '$state', '$stateParams', '$ionicPopup', '$ionicListDelegate', 'Actividad',
function ($resource, $scope, $state, $stateParams, $ionicPopup, $ionicListDelegate, Actividad) {
    $scope.header = 'Activity list';
    $scope.actividades = Actividad.query();

    $scope.crear_actividad = function() {
      $ionicPopup.prompt({
        title: "New task",
        template: "Enter task",
        inputPlaceholder: "What do you need to do?",
        okText: "Create task"
      }).then(function(res){ // promesa
        if(res) {
          actividad = new Actividad({
            titulo: res,
            descripcion: res
          });
          actividad.$save()
        }
      })
    };

    // Corregir. Capturar correctamente el id de la actividad y hacer update
    $scope.editar_actividad = function(actividad) {
      $scope.data = { response: actividad.titulo };
      $ionicPopup.prompt({
        title: "Edit task",
        scope: $scope
      }).then(function(res){ // promesa
        if(res != undefined) {
          // 'res' contiene todos las actividades en un array.
          // 'actividad' es una instancia del modelo actividad.
          Actividad.query({id: actividad.id}, function(res){
            actividad.titulo = $scope.data.response;
            console.log(actividad)
          });
        }; // Fin promesa
        $ionicListDelegate.closeOptionButtons()
      })
    }; // Fin de editar actividad

    // Corregir. Actualizar lista de actividades cuando se elimina una actividad
    $scope.eliminar_actividad = function(actividad) {
      Actividad.delete({id: actividad.id})
    }; // Fin de e acliminar actividad
}])