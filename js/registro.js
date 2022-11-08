function enviarDatos(){
	if(document.FormDireccion.chbEntrega1.checked == false){
		alert('La entrega no se encuentra seleccionada');
		return false;
	}
} //Parte a)

function visionConfidencial(){
     var codigoPostal = document.getElementById("pswCodigoPostal");
     var referenciaDir = document.getElementById("Mensaje"); 
     if(document.FormDireccion.chbEntrega2.checked == true){
          codigoPostal.type = "text";
          referenciaDir.style.display = '';
          } else {
          codigoPostal.type = "password";
          referenciaDir.style.display = 'none';
     }
} //Parte a)

