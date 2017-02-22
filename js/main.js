
function crearSpan(inputId, mensaje)
{
    var input = document.getElementById(inputId);
    var nuevoSpan = document.createElement("span");
    nuevoSpan.innerHTML= mensaje;
   
    if(input.nextElementSibling == null){
        input.parentNode.appendChild(nuevoSpan);
    }
}

function borrarSpan(inputId)
{
    var input = document.getElementById(inputId);
    if (input.nextSibling != null){
     input.parentNode.removeChild(input.nextSibling);
    }
}



function validateForm() {
   

/* var nombre = document.getElementById("name").value;
var apellido = document.getElementById("lastname").value;
var email = document.getElementById("input-email").value;
var contraseña = document.getElementById("input-password").value;
var lista =document.getElementById("bici").selectedIndex;
*/
   
     
    if($("#name").val()===""||$("#lastname").val()===""|| $("#input-email").val()===""|| $("#input-password").val()==="")
    {
        alert("Todos los campo  ss son obligatorios.");
        return false; 
    }
    
    else if (!(/^[a-zA-Z\s]*$/).test($("#name").val())){
       crearSpan("name", "Los numeros  no estan permitidos");
    }else{
        borrarSpan("name");
    }
    
    if(!(/^[a-zA-Z\s]*$/).test($("#lastname").val())){
       crearSpan("lastname", "Los numeros  no estan permitidos");
        
    }else{
        borrarSpan("lastname");
    }

    if (!/\w+@\w+\.+[a-z]/.test($("#input-email").val())) {
       crearSpan("input-email", "E-mail invalido, Ejm. nombre@dominio.com");
        
    }else{
        borrarSpan("input-email");
    }
    
    if( $("#input-password").val().length < 6 || $("#input-password").val() === "password"|| contraseña==="123456"|| contraseña==="098754"){
       crearSpan("input-password", "La contraseña debe ser mayor a 6 caracteres");
        
    }else{
        borrarSpan("input-password");
    }
   
    if( $("#bici").val() == null || $("#bici").val() == 0 ) {
        crearSpan("bici", "Elija una opcion de la lista");
        
    }else{
        borrarSpan("bici");
    }
    
   /* if (nombre.charAt(0) != nombre.charAt(0).toUpperCase()|| apellido.charAt(0) != apellido.charAt(0).toUpperCase())
    {
        crearSpan("name", "Primera letra debe ser en mayuscula");
        
    }else{
        borrarSpan("name");
    }
    */
    
  
  
}