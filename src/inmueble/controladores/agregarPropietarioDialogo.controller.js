/*
* Kevin Rivera - Copyleft 
* [Titulo]
* [Descripcion]
*/
function agregarPropietario($mdDialog) {
    var vm = this;
	vm.closeDialog = function () {
		$mdDialog.hide();
	};
}

angular.module('catastro.inmueble')
    .controller('agregarPropietarioCtrl',['mdDialog', agregarPropietario]);
