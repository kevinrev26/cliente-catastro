/*
* Kevin Rivera - Copyleft 
* [Titulo]
* [Descripcion]
*/

function agregarSolicitud(){
	var vm = this;
	
	
	vm.titulo = "Agregar una nueva solicitud";
	
	vm.tramites = [
		'Traspaso',
		'Unificacion',
		'Cierre de inmueble',
		'Apertura de inmueble'
	];
	
	vm.estados = [
		'Ingreso',
		'En inspeccion',
		'En juridico',
		'Aprobado',
		'Rechazado'
	];
	
	vm.enviarFormulario = function(){
		console.log(vm.formData);
	}
	
}


angular.module('catastro.solicitud')
	.controller('agregarSolicitudCtrl', agregarSolicitud);
