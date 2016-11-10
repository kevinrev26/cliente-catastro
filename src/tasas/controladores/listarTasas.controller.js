/*
* Kevin Rivera - Copyleft 
* [Titulo]
* [Descripcion]
*/

function listarTasas(tasaService){
	var vm = this;
	vm.titulo = "Tasas registradas en el sistema";
	
	vm.tasas = tasaService.getTasas();
}

angular.module('catastro.tasas')
	.controller('listarTasasCtrl', ['tasaService',listarTasas]);
