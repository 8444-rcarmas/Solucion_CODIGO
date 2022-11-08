function validar(){
     var valor1 = document.getElementById("correo").value;
     var valor2 = document.getElementById("telefono").value;
     var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
     if( expresion.test(valor1) == false){
          alert('Campo Incorrecto se necesita un correo');
          return false;
     }
     if( (valor2.length == 10) && ( ! isNaN(valor2)) ){     
          
     } else {
          alert('Campo Incorrecto se necesita 10 digitos numericos');
          return false;
     }
} //Parte a)

function clickEnviar(boton) {
     boton.disabled = true;
     boton.value = "Enviando datos ....";
} //Parte b)
