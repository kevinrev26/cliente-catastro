/*
* Kevin Rivera - Copyleft 
* [contribuyente.service]
* [Descripcion]
* Especifica los metodos para tratar con los servicios a traves de la web
*/

function contribService($http, $base64){
    
    
    //var auth = $base64.encode('user:123456');
    //var headers = {'Authorization' : 'Basic ' + auth};
    
	var contrib = this;
	//creando array de usuarios;
	contrib.usuarios = [];
	//Creando un objeto 
/*	function User(id, nom, ape, nit, tel, mail){
        this.id = id;
		this.nombre = nom;
		this.apellido = ape;
		this.nit = nit;
		//this.direccion = dir;
		this.telefono = tel;
		this.email = mail;
	}
	
	contrib.init = function(){
		var k = new User(1, "Kevin Edgardo","Rivera Martinez", "0614260793123", "70186743", "kevin@example.com");
		contrib.usuarios.push(k);
		var j = new User(2, "Jennifer Sarai","Rodriguez Valencia", "06142601233", "76635487", "jenn@example.com");
		contrib.usuarios.push(j);
	};*/
	
	//inicializando datos
	//contrib.init();
	
	//Obteniendo los usuarios
	contrib.getUsuarios = function(){
		return $http.get('http://localhost:3000/api/contribuyentes/');
	};
	
	
	//Metodo para agregar usuario
	contrib.addUsuario = function(user){
		//contrib.usuarios.push(user);
        return $http({
            url: 'http://localhost:3000/api/contribuyentes/',
            method: 'POST',
            data : user,
            headers: {'Content-Type': 'application/json'}
        });
	}
	
    
    contrib.getUsuarioById = function (id) {
        
        return $http.get('http://localhost:3000/api/contribuyentes/'+id);
        
        
    };
	//return contrib;
	
}

//Registrando el servicios
angular.module('catastro.app')
	.service('contribService', ['$http', '$base64', contribService]);


