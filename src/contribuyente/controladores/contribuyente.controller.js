/*
* Kevin Rivera - Copyleft 
* [contribuyente.controller.js]
* [Descripcion]
* Archivo que funciona como controlador para el modulo contribuyente
*/

//Funcion controlador
function contribuyente($route, $mdDialog , contribService){
	var contribuyente = this;
	contribuyente.titulo = "Agregar un nuevo contribuyente";
	contribuyente.nombre = "Kevin Rivera"
	
	contribuyente.enviarFormulario = function (){
        
        //console.log("Click");
        contribService.addUsuario(contribuyente.formData)
            .then(function(result){
                //console.log(result);
                alert = $mdDialog.alert({
                    title: '¡Bien"',
                    textContent: 'Agregado con éxito un nuevo contribuyente',
                    ok: 'Ok'
                });
            
                $mdDialog.show( alert )
                    .finally(function () {
                    alert = undefined;
                });
            
                $route.reload();
            
        }, function(error){
            console.log(error);
            
            alert = $mdDialog.alert({
                    title: '¡Error!',
                    textContent: 'Algo anduvo mal, por favor intentelo nuevamente',
                    ok: 'Ok'
                });
            
                $mdDialog.show( alert )
                    .finally(function () {
                    alert = undefined;
                });
            
        });
        /*
		//console.log(contribuyente.formData)
		contribService.addUsuario(contribuyente.formData)
        .then(function(response){
            /*    
            alert = $mdDialog.alert({
                title: '¡Realizado!',
                textContent: 'Agregado un nuevo contribuyente',
                ok: 'OK'
            });

            $mdDialog.show( alert )
                .finally(function() {
                  alert = undefined;
            });
            
            $route.reload();/////
              
            console.log(response);
              
              
              }, function(error){
            console.log("ERROR: " error);
            
        });
		//contribuyente.mensaje = "Agregado el nuevo contribuyente";
	*/};
}

//Registro en el modulo
angular.module('catastro.contribuyente')
	.controller('contribuyenteController', ['$route', '$mdDialog','contribService', contribuyente]);

