/*
* Kevin Rivera - Copyleft 
* [dashboard.controller.js]
* [Descripcion]
* Controlador principal para el dashboard
*/
//Funcion para registrar el controlador en el modulo catastro.dashboard
function dashboard() {
	var dashboard = this;
	dashboard.titulo = "Herramientas mas utilizadas";
}

//registrando el controlador en el modulo
angular.module('catastro.dashboard')
	.controller('dashboardController', dashboard);
