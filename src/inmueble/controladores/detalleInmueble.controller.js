/*
* Kevin Rivera - Copyleft 
* [Titulo]
* [Descripcion]
*/

function detalle($routeParams, $mdDialog, inmuebleService){
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
			controller: 'agregarPropietarioCtrl',
			clickOutsideToClose: true/*,
			locals: {
				inmueble: vm.Inmueble
			}		*/
			
		});
	};
	
	
}

angular.module('catastro.inmueble')
	.controller('detalleInmuebleCtrl', ['$routeParams', '$mdDialog','inmuebleService', detalle]);
