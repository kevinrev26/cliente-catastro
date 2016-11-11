/*
* Kevin Rivera - Copyleft 
* [agregarInmueble.controller.js]
* [Descripcion]
* Controlador para agregar un nuevo inmueble
*/

function agregarInmueble(inmuebleService){
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
		vm.formData.idContribuyente = {};
		if(!vm.formData.isComercial){
			vm.formData.isComercial = false;
		}
        
        inmuebleService.addInmueble(vm.formData)
            .then(function(result){
            console.log(result.data);
        }, function(error){
            console.log(error);
        });
		//console.log(vm.formData);
        
	};
}

angular.module('catastro.inmueble')
	.controller('agregarInmuebleCtrl', ['inmuebleService', agregarInmueble]);
