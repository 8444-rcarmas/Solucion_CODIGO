$(document).ready(function(){

    $(".contenedor-formularios").find("input, textarea").on("keyup blur focus", function (e) {

        var $this = $(this),
          label = $this.prev("label");

        if (e.type === "keyup") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.addClass("active highlight");
            }
        } else if (e.type === "blur") {
            if($this.val() === "") {
                label.removeClass("active highlight");
                } else {
                label.removeClass("highlight");
                }
        } else if (e.type === "focus") {
            if($this.val() === "") {
                label.removeClass("highlight");
            }
            else if($this.val() !== "") {
                label.addClass("highlight");
            }
        }

    });

    $(".tab a").on("click", function (e) {

        e.preventDefault();

        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");

        target = $(this).attr("href");

        $(".contenido-tab > div").not(target).hide();

        $(target).fadeIn(600);

    });

});

function desactivado(){
    usuario = document.getElementById("usuario");
    contraseña  = document.getElementById("clave");

    usuario.disabled = false;
    contraseña.disabled = false;
}

function validarDatos(){
     var nombre = document.getElementById("nom").value;
     var apellido = document.getElementById("ape").value;
     var usuario = document.getElementById("usu").value;
     var mail = document.getElementById("email").value;
     var contraseña = document.getElementById("pas").value;
     var telefono = document.getElementById("tel").value;
     var empresa = document.getElementById("emp").value;
     var fecha = document.getElementById("fecha").value;
     if( nombre == "" || apellido == "" || usuario == "" || mail == "" || contraseña == "" || telefono == "" || empresa == "" || fecha == ""){
          alert('TODOS LOS CAMPOS SON OBLIGATORIOS');
          return false;
     }
} //Parte b)
