/*
* Kevin Rivera - Copyleft 
* [sidenav.controller.js]
* [Descripcion]
* Controlador para manejar el boton del menu de herramientas y la barra de navegacion
*/

function sidenav(){
	var side = this;
	side.dummy = "dummy_var";
	side.showNav = false;
	side.toggleNav = function (){
		console.log('toggle-function');
		side.showNav = !side.showNav;
	};
	
	side.print = function (){
		console.log("Click!");
	};
}

angular.module('catastro.app')
	.controller('sidenavController', sidenav);

