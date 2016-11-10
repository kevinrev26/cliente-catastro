/*
* Kevin Rivera - Copyleft 
* [Titulo]
* [Descripcion]
*/

function detalle($routeParams, inmuebleService){
	var vm = this;
	
	vm.inmuebleId = $routeParams.inmuebleid;
	vm.titulo = "Inmueble " + vm.inmuebleId;
	console.log(vm.inmuebleId);
	vm.Inmueble = inmuebleService.getInmuebleById(vm.inmuebleId);	
	
}

angular.module('catastro.inmueble')
	.controller('detalleInmuebleCtrl', ['$routeParams','inmuebleService', detalle]);
