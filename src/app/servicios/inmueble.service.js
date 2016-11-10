/*
* Kevin Rivera - Copyleft 
* [Titulo]
* [Descripcion]
*/
function inmuebleService(){
	var inmueble = this;
	function Inmueble(tipo, comercial, alumbrado, clave, valor, metros, superficie, observaciones, dir){
		this.tipoInmueble = tipo;
		this.isComercial = comercial;
		this.tipoAlumbrado = alumbrado;
		this.clave = clave;
		this.valor = valor;
		this.metros = metros;
		this.superficie = superficie;
		this.observaciones = observaciones;
		this.direccion = dir;
		this.propietario = {};
		
	}
	
	inmueble.inmuebles = [];
	inmueble.init = function(){
		var i = new Inmueble('Condominio',false, 'C', '12345678', '123000', '27.5', '435.20', 'bla bla', 'Avenida 1');
		inmueble.inmuebles.push(i);
		var l = new Inmueble('Vivienda',true, 'B', '12345578', '127000', '17.5', '535.20', 'bla bla blabla', 'Avenida 19');
		inmueble.inmuebles.push(l);	
	};
	
	inmueble.init();
	
	inmueble.getInmuebles = function(){
		return inmueble.inmuebles;
	};
	
	inmueble.getInmuebleById = function(inmuebleId){
		for(var i=0; i<inmueble.inmuebles.length; i++){
			var aux = inmueble.inmuebles[i];
			if(aux.clave===inmuebleId){
				console.log(aux);
				return aux;
			}
		}
	};
	
	
}

angular.module('catastro.app')
	.service('inmuebleService',inmuebleService);
