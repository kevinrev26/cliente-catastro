/*
* Kevin Rivera - Copyleft 
* [Titulo]
* [Descripcion]
*/
function inmuebleService(){
	var inmueble = this;
	function Inmueble(tipo, comercial, alumbrado, clave, valor, metros, superficie, observaciones){
		this.tipoInmueble = tipo;
		this.isComercial = comercial;
		this.tipoAlumbrado = alumbrado;
		this.clave = clave;
		this.valor = valor;
		this.metros = metros;
		this.superficie = superficie;
		this.observaciones = observaciones;
		
	}
	
	inmueble.inmuebles = [];
	inmueble.init = function(){
		var i = new Inmueble('Condominio',false, 'C', '12345678', '123000', '27.5', '435.20', 'bla bla');
		inmueble.inmuebles.push(i);
		var l = new Inmueble('Vivienda',true, 'B', '12345678', '127000', '17.5', '535.20', 'bla bla blabla');
		inmueble.inmuebles.push(l);		
	};
	
	inmueble.init();
	
	inmueble.getInmuebles = function(){
		return inmueble.inmuebles;
	}
	
}

angular.module('catastro.app')
	.service('inmuebleService',inmuebleService);
