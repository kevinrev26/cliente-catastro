/*
* Kevin Rivera - Copyleft 
* [list-contrib.controller.js]
* [Descripcion]
* Controlador para buscar y listar los contribuyentes en el sistema
*/
function listarContribuyentes(contribService){
	 var vm = this;
	 vm.titulo = "Buscar contribuyentes";
	 contribService.getUsuarios()
        .then(function(result){
         vm.contribuyentes = result.data;
     }, function(error){
         console.log('ERROR: ' + error);
     });
	 	 
}

angular.module('catastro.contribuyente')
	.controller('listContribCtrl', ['contribService', listarContribuyentes]);

