/*
* Kevin Rivera - Copyleft 
* [list-contrib.controller.js]
* [Descripcion]
* Controlador para buscar y listar los contribuyentes en el sistema
*/
function listarContribuyentes(contribService){
	 var vm = this;
	 vm.titulo = "Buscar contribuyentes";
	 vm.contribuyentes = contribService.getUsuarios();
	 	 
}

angular.module('catastro.contribuyente')
	.controller('listContribCtrl', ['contribService', listarContribuyentes]);

