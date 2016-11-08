/*
* Kevin Rivera - Copyleft 
* [agregarTasasController.js]
* [Descripcion]
* Controla el formulario para agregar una nueva tasa impositiva a la persistencia
*/
function agregarTasa(){
	var vm = this;
	vm.titulo = "Agregar una nueva tasa impositiva"
	
}

//Registrando en el modulo

angular.module('catastro.tasas')
	.controller('agregarTasaCtrl', agregarTasa);
