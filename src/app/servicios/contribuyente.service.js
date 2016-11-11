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
	function User(id, nom, ape, nit, tel, mail){
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
	
    
    contrib.getUsuarioById = function (id) {
        
        for(var i = 0; i < contrib.usuarios.length; i++){
            var aux = contrib.usuarios[i];
            if(aux.id === id){
                return aux;
            }
        }
        
    };
	//return contrib;
	
}

//Registrando el servicios
angular.module('catastro.app')
	.service('contribService', contribService);


