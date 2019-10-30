function validar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("telefono").value;
    let celular = document.getElementById("celular").value;
    let tipo = document.getElementById("listaTipoC").value;
    let ciudad = document.getElementById("ciudad").value;
    let texto = document.getElementById("mensaje").value;



    if (nombre === "" || apellido === "" || correo === "" || telefono === "" || celular === "" || ciudad === "" || tipo === "" || texto === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (celular.length >= 11) {
        alert("El celular no es válido ");
        return false;
    }
    else if (celular.length < 10) {
        alert("El celular no es válido");
        return false;
    }
    else if (isNaN(celular)) {
        alert("El celular ingresado no es un número");
        return false;
    }
    else if (telefono.length >= 8) {
        alert("El telefono no es válido ");
        return false;
    }
    else if (telefono.length < 7) {
        alert("El telefono no es válido");
        return false;
    }
    else if (isNaN(telefono)) {
        alert("El telefono ingresado no es un número");
        return false;
    }
}
