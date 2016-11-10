/*
* Kevin Rivera - Copyleft 
* [Titulo]
* [Descripcion]
*/
//Tasas para aseo, relleno y alumbrado

function servicioTasas(){

	var tasa = this;
	function Tasa(id, desc, tipo, inicio, fin){
		this.id = id;
		this.descripcion = desc;
		this.tipo = tipo;
		this.inicio = inicio;
		this.fin = fin;
	}
	
	tasa.tasas = [];
	
	tasa.init = function(){
		var r  = new Tasa('1.1.1', 'Inmuebles con area mayor a 1,000 metros cuadrados', 'vivienda', 1000, 1000000);
		tasa.tasas.push(r);
		
		var x = new Tasa('2.1.1', 'Inmuebles con uso habitacional', 'vivienda', 0.0, 70);
		
		tasa.tasas.push(r);
		
		var t = new Tasa('3.1.1', 'Para lotes cuya superficie sea igual o mayor de 1,0000 metros', 'A', 1000, 1000000);
		
		tasa.tasas.push(t);
	};
	
	tasa.init();
	
	tasa.getTasas = function(){
		return tasa.tasas;
	};
	
	
}

angular.module('catastro.app')
	.service('tasaService', servicioTasas);
	
	
