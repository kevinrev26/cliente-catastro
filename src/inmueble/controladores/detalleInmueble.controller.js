/*
* Kevin Rivera - Copyleft 
* [Titulo]
* [Descripcion]
*/

function detalle($scope, $routeParams, $mdDialog, inmuebleService, contribService, $route){
	var vm = this;
	
	vm.inmuebleId = $routeParams.inmuebleid;
	vm.titulo = "Clave catastral: " + vm.inmuebleId;
	console.log(vm.inmuebleId);
	vm.Inmueble = inmuebleService.getInmuebleById(vm.inmuebleId);
	//Propietarios		
    
  
    
	vm.agregarPropietario = function($event){
		console.log('Click en boton');
		$mdDialog.show({
			parent :  angular.element(document.body),
			targetEvent : $event,
			templateUrl: 'src/inmueble/views/agregar-propietario-dialogo.html',
			controller: propietarioController,
            //controllerAs: 'dialogo',
			clickOutsideToClose: true
			
		})
        .then(function(contribuyente){
            
            //console.log(contribuyente);            
            inmuebleService.setPropietario(vm.inmuebleId, contribuyente);
            
            alert = $mdDialog.alert({
                title: '¡Realizado!',
                textContent: 'Propietario modificado',
                ok: 'OK'
            });

            $mdDialog.show( alert )
                .finally(function() {
                  alert = undefined;
            });
            
            $route.reload();
            
            
        }, function(){
            
            alert = $mdDialog.alert({
            title: '¡Oops!',
            textContent: 'Debe agregar un propietario',
            ok: 'Entendido'
          });

          $mdDialog.show( alert )
            .finally(function() {
              alert = undefined;
            });
            
        });
	
	
    };
    
    
    function propietarioController($scope, $mdDialog, contribService){
        
        $scope.cancel = function(){
          $mdDialog.cancel();  
        };
        
        $scope.propietario = function (contribuyente) {
            $mdDialog.hide(contribuyente);
        };
        
        $scope.buscar = function(){
            $scope.contr = contribService.getUsuarioById(parseInt($scope.id)); 
            //console.log();
        };
        
    }
    
}



angular.module('catastro.inmueble')
	.controller('detalleInmuebleCtrl', ['$scope', '$routeParams', '$mdDialog','inmuebleService', 'contribService', '$route', detalle]);
