angular.module('app.controllers', ['ionic'])

// $routeParams,
.controller('actividadCtrl', [ '$scope', '$ionicPopup', '$ionicListDelegate', 'Actividad',
function ($scope, $ionicPopup, $ionicListDelegate, Actividad) {
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
        // $save: metodo de instancia(resource.$save)
        actividad.$save()
      }
    })  // Fin promesa
  }; // Fin de crear_actividad

  $scope.editar_actividad = function(actividad) {
    $scope.data = { response: actividad.titulo };
    $ionicPopup.prompt({
      title: "Edit task",
      scope: $scope
    }).then(function(res){ // promesa
      if(res != undefined) {
        // 'res' contiene todos las actividades en un array.
        // 'actividad' es una instancia del modelo Actividad.
        Actividad.get({ id: actividad.id }, function(actividadToUpdate){
          actividadToUpdate.titulo = $scope.data.response;
          actividadToUpdate.descripcion = $scope.data.response;
          Actividad.update({ id:actividad.id }, actividadToUpdate );
        });
      };
      $ionicListDelegate.closeOptionButtons()
    })  // Fin promesa
  }; // Fin de editar_actividad

  // Corregir. Actualizar lista de actividades cuando se elimina una actividad
  $scope.eliminar_actividad = function(actividad) {
    // delete: metodo del modelo Actividad
    Actividad.delete({ id: actividad.id })
  }; // Fin de eliminar_actividad

}])