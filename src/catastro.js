/*
* Kevin Rivera - Copyleft 
* [catastro.js]
* [Descripcion]
* Modulo principal de la aplicacion de angular para el sistema de gestion de
* cuentas corrientes de la alcaldia de San Salvador.
*/

//Inicializando la aplicacion con las dependencias requeridas
angular.module('catastro', [
                            'ngMaterial',
                            'ngRoute',
                            'ngMessages',
                            'catastro.app',
                            'catastro.login',                        
                            'catastro.dashboard',
                            'catastro.contribuyente',
                            'catastro.tasas',
                            'catastro.inmueble']);


/*Funcion que especifica las rutas a mapear*/
function configuracionRutas($routeProvider){
    $routeProvider.when('/', {
            templateUrl: 'src/login/views/home.html',
            controller: 'loginController',
            controllerAs: 'login'
                        
    })
    .when('/dashboard', {
    		templateUrl: 'src/dashboard/views/dashboard.html',
    		controller: 'dashboardController',
    		controllerAs: 'dashboard'
    })
    .when('/agregar-contribuyente', {
    		templateUrl: 'src/contribuyente/views/agregar-contribuyente.html',
    		controller: 'contribuyenteController',
    		controllerAs: 'contribuyente'
    })
    .when('/buscar-contribuyente', {
    	templateUrl: 'src/contribuyente/views/listar-contrib.html',
    	controller: 'listContribCtrl',
    	controllerAs: 'listContrib'
    })
    .when('/agregar-tasa',{
    	templateUrl: 'src/tasas/views/agregar-tasa.html',
    	controller: 'agregarTasaCtrl',
    	controllerAs: 'addTax'
    })
    .when('/agregar-inmueble', {
    	templateUrl: 'src/inmueble/views/agregar-inmueble.html',
    	controller: 'agregarInmuebleCtrl',
    	controllerAs: 'addProperty'
    })
    .when('/buscar-inmueble', {
    	templateUrl: 'src/inmueble/views/buscar-inmueble.html',
    	controller: 'buscarInmuebleCtrl',
    	controllerAs: 'findProperty'
    }) 	
    .otherwise({
        redirectTo: '/'
    });
    
    //$locationProvider.html5Mode(true);
}

//Funcion para configuracion de la paleta de colores
function configurarPaleta($mdThemingProvider){
	$mdThemingProvider.theme('default')
		.primaryPalette('light-blue')
		.accentPalette('brown');
		
}

//Agregando la funcion de rutas al modulo de la aplicacion
angular.module('catastro')
               .config(['$routeProvider', configuracionRutas]);

/* Configurando la paleta de colores de la aplicacion */
angular.module('catastro')
				.config(['$mdThemingProvider', configurarPaleta]);
