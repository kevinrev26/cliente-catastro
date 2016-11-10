/*
* Kevin Rivera - Copyleft 
* [Titulo]
* [Descripcion]
*/
function agregarPropietario($scope, $mdDialog){
	$scope.closeDialog = function(){
		$mdDialog.hide();
	};
}

angular.module('catastro.inmueble')
	.controller('agregarPropietarioCtrl', ['$scope', '$mdDialog',  agregarPropietario]);
