/*
* Kevin Rivera - Copyleft 
* [agregarInmueble.controller.js]
* [Descripcion]
* Controlador para agregar un nuevo inmueble
*/

function agregarInmueble(){
	var vm = this;
	vm.titulo = "Agregar inmueble";
	vm.tiposInmuebles = [
		'Habitacional',
		'Condominio',
		'Previo baldio'
	];
	
	vm.alumbrado = [
		'A',
		'B',
		'C',
		'D',
		'E'
	];
	
	vm.enviarFormulario = function(){
		vm.formData.propietario = {};
		if(!vm.formData.isComercial){
			vm.formData.isComercial = false;
		}
		console.log(vm.formData);
	};
}

angular.module('catastro.inmueble')
	.controller('agregarInmuebleCtrl', agregarInmueble);
