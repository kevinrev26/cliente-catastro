/*
* Kevin Rivera - Copyleft 
* [Titulo]
* [Descripcion]
*/

function buscar(inmuebleService){
	var vm = this;
	vm.titulo = 'Buscar inmueble';
	vm.inmuebles = inmuebleService.getInmuebles();
	
}

angular.module('catastro.inmueble')
	.controller('buscarInmuebleCtrl', ['inmuebleService', buscar]);
