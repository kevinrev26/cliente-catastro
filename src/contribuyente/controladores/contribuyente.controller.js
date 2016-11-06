/*
* Kevin Rivera - Copyleft 
* [contribuyente.controller.js]
* [Descripcion]
* Archivo que funciona como controlador para el modulo contribuyente
*/

//Funcion controlador
function contribuyente(){
	var contribuyente = this;
	contribuyente.titulo = "Agregar un nuevo contribuyente";
	contribuyente.nombre = "Kevin Rivera"
	
	contribuyente.enviarFormulario = function (){
		console.log(contribuyente.formData)
	}
}

//Registro en el modulo
angular.module('catastro.contribuyente')
	.controller('contribuyenteController', contribuyente);

