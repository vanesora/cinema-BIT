/*VALIDACIÓN DE FORMULARIO DE REGISTRO*/ 
function validar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("contrasena").value;
    
    if (nombre === "" || apellido=== "" || correo=== "" || contrasena=== "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    console.log(nombre);
//MÉTODO PARA CAPTURAR EL NOMBRE Y ENVIARLO A LA PÁGINA QUE SE NECESITA
    //CAMBIAR "registro.html" por el nombre de la página en la cual se cargará el formulario de compra
    nombre = document.location = "registro.html?name=" + nombre
    return false;
}

/*FIN VALIDACIÓN DE FORMULARIO DE REGISTRO*/ 

//FUNCIÓN PARA CARGAR EL NOMBRE REGISTRADO
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const nombre = urlParams.get('name');
    document.getElementById('bienvenido').innerHTML = "Bienvenido " + nombre;
};

// FUNCIONES MOSTRAR Y OCULTAR CONTENIDO
function mostrarForm() {
    document.getElementById('formularioRegistro').classList.add("divVisible")
    document.getElementById('contenedorFormularios').classList.add("bg-color")
    document.getElementById('btn-registro').classList.add("divOculto")
}

function ocultarForm() {
    document.getElementById('formularioRegistro').classList.add("divOculto")
    document.getElementById('btn-registro').classList.add("divVisible")
}

function mostrarCompra(){
    document.getElementById('formularioCompra').classList.add("divVisible")
    document.getElementById('contenedorFormularios').classList.add("bg-color")
    document.getElementById('btn-compra').classList.add("divOculto")
}

function ocultarCompra(){
    document.getElementById('formularioCompra').classList.add("divOculto")
    document.getElementById('btn-compra').classList.add("divVisible")
}

// VALIDACIÓN DE FORMULARIO DE COMPRA
function compraExitosa() {
    document.getElementById('compra')

    let teatro = document.getElementById('teatro').value
    let comercial = document.getElementById('cineComercial').value
    let alternativo = document.getElementById('cineAlternativo').value
    let boleta = document.getElementById('boleta').value

    if (comercial == 0 && alternativo == 0 ) {
        alert("Seleccione una película para continuar")
    } else if (teatro == 0) {
        alert ("Seleccione un teatro para continuar")
    } else if (boleta <=0) {
        alert("Seleccione mínimo una boleta")
    } 
    else {
        alert("Compra exitosa")
    }
    
}

