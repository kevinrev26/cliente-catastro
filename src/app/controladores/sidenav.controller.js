/*
* Kevin Rivera - Copyleft 
* [sidenav.controller.js]
* [Descripcion]
* Controlador para manejar el boton del menu de herramientas y la barra de navegacion
*/

function sidenav(){
	var side = this;
	side.menu = [		
		{		
			'title': 'CONTRIBUYENTES',
			'icon': 'assets/icons/teamwork.svg',
			'options' : [
				{
					'title' : 'Agregar contribuyente',
					'url' : '/#agregar-contribuyente'
				},
				{
					'title' : 'Buscar contribuyente',
					'url' : '/#buscar-contribuyente'
				}/*,
				{
					'title' : 'Modificar contribuyente',
					'url' : '/#modificar-contribuyente'
				}*/
			]
		},
		{
			'title': 'SOLICITUDES',
			'icon' : 'assets/icons/resume.svg',
			'options' : [
				{
					'title' : 'Agregar solicitudes',
					'url' : '/#agregar-solicitud'
				},
				{
					'title' : 'Ver solicitudes de traspaso',
					'url' : '/#solicitud-traspaso'
				}				
			]
		},
		{
			'title': 'TRAMITES CATASTRALES',
			'icon' : 'assets/icons/earth-globe.svg',
			'options' : [
				{
					'title' : 'Realizar traspaso de inmueble',
					'url' : '/#traspaso'
				},
				{
					'title' : 'Unificaciones',
					'url' : '/#unificacion'
				},
			]
		},
		{
			'title' : 'TASAS',
			'icon' : 'assets/icons/tax.svg',
			'options' : [
				{
					'title' : 'Agregar tasa',
					'url' : '/#agregar-tasa'
				},
				{
					'title': 'Ver tasas',
					'url' : '/#listar-tasas'
				}	
			]
		},
		{
			'title' : 'REPORTES',
			'icon' : 'assets/icons/analytics.svg',
			'options' : [
				{
					'title' : 'Impresion de estado de cuenta',
					'url' : '/#estado-de-cuenta'
				}
			]
		},
		{
			'title': 'INMUEBLES',
			'icon' : 'assets/icons/bank.svg',
			'options' : [
				{
					'title' : 'Agregar inmueble',
					'url' : '/#agregar-inmueble'
				},
				{
					'title' : 'Buscar inmueble',
					'url' : '/#buscar-inmueble'
				}
			]
		}
	];
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

