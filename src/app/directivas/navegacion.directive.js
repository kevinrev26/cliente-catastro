/**
*     @kevinrev26
*     [navegacion.directive.js]
*     [Descripcion]
*     Se crea una directiva para la reutilizacion de la barra de navegacion en las distintas
*     rutas de la aplicacion.
*     [4/11/16]     
*
**/
//Funcion nombrada para la creacion de la directiva
function navegacion() {
    return {
      restrict: 'EA',
      scope: {
          titulo: '=titulo',
      },
      templateUrl: 'src/app/views/navegacion.html',
      controller: function($scope){
          $scope.showNav = false;
          $scope.toggleNav = function(){
              $scope.showNav = !$scope.showNav;
          }
      }
    };
}

//Llamada al modulo App para registrar la directiva
angular.module('catastro.app')
    .directive('navegacion', navegacion);

