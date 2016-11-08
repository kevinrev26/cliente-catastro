/*
* Kevin Rivera - Copyleft 
* [contribuyente.controller.js]
* [Descripcion]
* Archivo que funciona como controlador para el modulo contribuyente
*/

//Funcion controlador
function contribuyente(contribService){
	var contribuyente = this;
	contribuyente.titulo = "Agregar un nuevo contribuyente";
	contribuyente.nombre = "Kevin Rivera"
	
	contribuyente.enviarFormulario = function (){
		console.log(contribuyente.formData)
		contribService.addUsuario(contribuyente.formData);
		contribuyente.mensaje = "Agregado el nuevo contribuyente";
	}
}

//Registro en el modulo
angular.module('catastro.contribuyente')
	.controller('contribuyenteController', [ 'contribService', contribuyente]);

