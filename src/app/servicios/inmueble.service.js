/*
* Kevin Rivera - Copyleft 
* [Titulo]
* [Descripcion]
*/
function inmuebleService($http){
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
	
	//inmueble.init();
	
    inmueble.addInmueble = function (inm){
        return $http({
            url: 'http://localhost:3000/api/inmuebles/',
            method: 'POST',
            data : inm,
            headers: {'Content-Type': 'application/json'}
        });
    }
    
	inmueble.getInmuebles = function(){
		return $http.get('http://localhost:3000/api/inmuebles/');
	};
	
	inmueble.getInmuebleById = function(inmuebleId){
		return $http.get('http://localhost:3000/api/inmuebles/'+inmuebleId);
	};
    
    inmueble.setPropietario = function(inmuebleId, prop){
      /*inmueble.getInmuebleById(inmuebleId)
        .propietario = prop;*/
        
        inmueble.getInmuebleById(inmuebleId)
            .then(function (response){
                
                var aux = response.data;
                console.log(aux);
                console.log(prop);
                aux.idContribuyente = prop;
                return $http({
                    url: 'http://localhost:3000/api/inmuebles/'+inmuebleId,
                    method: 'PUT',
                    data: aux,
                    headers: {'Content-Type': 'application/json'}                
                });
        }, function(error){
            console.log(eror);
        });
        
    };
	
	
}

angular.module('catastro.app')
	.service('inmuebleService',['$http', inmuebleService]);
