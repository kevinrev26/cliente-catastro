/*
* Kevin Rivera - Copyleft 
* [contribuyente.service]
* [Descripcion]
* Especifica los metodos para tratar con los servicios a traves de la web
*/

function contribService(){
	var contrib = this;
	//creando array de usuarios;
	contrib.usuarios = [];
	//Creando un objeto 
	function User(nom, ape, nit, dir, tel, mail){
		this.nombre = nom;
		this.apellido = ape;
		this.nit = nit;
		this.direccion = dir;
		this.telefono = tel;
		this.email = mail;
	}
	
	contrib.init = function(){
		var k = new User("Kevin Edgardo","Rivera Martinez", "0614260793123","Col el refugio, casa numero 4 block 2", "70186743", "kevin@example.com");
		contrib.usuarios.push(k);
		var j = new User("Jennifer Sarai","Rodriguez Valencia", "06142601233","Col la gloria mejicanos", "76635487", "jenn@example.com");
		contrib.usuarios.push(j);
	};
	
	//inicializando datos
	contrib.init();
	
	//Obteniendo los usuarios
	contrib.getUsuarios = function(){
		return contrib.usuarios;
	};
	
	
	//Metodo para agregar usuario
	contrib.addUsuario = function(user){
		contrib.usuarios.push(user);
	}
	
	//return contrib;
	
}

//Registrando el servicios
angular.module('catastro.app')
	.service('contribService', contribService);


