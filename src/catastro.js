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
                            'base64',
                            'catastro.app',
                            'catastro.login',                        
                            'catastro.dashboard',
                            'catastro.contribuyente',
                            'catastro.tasas',
                            'catastro.inmueble',
                            'catastro.solicitud']);


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
    .when('/inmueble/:inmuebleid',{
    	templateUrl: 'src/inmueble/views/detalle-inmueble.html',
    	controller: 'detalleInmuebleCtrl',
    	controllerAs: 'detalleInmueble'
    })
    .when('/listar-tasas', {
    	templateUrl: 'src/tasas/views/listar-tasas.html',
    	controller: 'listarTasasCtrl',
    	controllerAs: 'listTax'
    })
    .when('/agregar-solicitud', {
    	templateUrl: 'src/solicitud/views/agregar-solicitud.html',
    	controller: 'agregarSolicitudCtrl',
    	controllerAs: 'solicitud'
    })
    .otherwise({
        redirectTo: '/'
    });
    
    //$locationProvider.html5Mode(true);
}


//function para las headers
function httpProveedores($httpProvider, $base64){
    var auth = $base64.encode("user:123456");
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.common['Authorization'] = 'Basic' + auth;
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {}
}

//Funcion para configuracion de la paleta de colores
function configurarPaleta($mdThemingProvider){
	$mdThemingProvider.theme('default')
		.primaryPalette('light-blue')
		.accentPalette('brown');
		
}

//Agregando modulo
angular.module('catastro')
             .config(['$httpProvider', '$base64', httpProveedores]);

//Agregando la funcion de rutas al modulo de la aplicacion
angular.module('catastro')
               .config(['$routeProvider', configuracionRutas]);

/* Configurando la paleta de colores de la aplicacion */
angular.module('catastro')
				.config(['$mdThemingProvider', configurarPaleta]);
