
// Codigo Acordeon 
// llamar por medio del clic el documento
document.addEventListener('click', function (event) {
  
//se ubica la clase en el contenido
if (!event.target.classList.contains('acordeon')) return;

// se obtine el elemento
var content = document.querySelector(event.target.hash);
if (!content) return;

// Se ajusta el comportamiento del link (si esta predeterminado)
event.preventDefault();

// Cuando el contenido este desplegado, al dar clic se contrae
if (content.classList.contains('activar')) {
    content.classList.remove('activar');
    return;
}

// Abrir el contenido, repetir y cerrar
var accordions = document.querySelectorAll('.acontenido.activar');
for (var i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove('activar');
}

// Alternar (si esta cerrado abralo, si esta abierto cerrar)
content.classList.toggle('activar');
})


//Evento cambiar mensaje del acordeon con el despliegue
function cambiob() {
    var bot = document.getElementById('acorb');
    if (bot.innerHTML == 'Mostrar más salas en Bogotá') bot.innerHTML = 'Mostrar menos salas';
    else bot.innerHTML = 'Mostrar más salas en Bogotá'; 
}

function cambioc() {
    var cal = document.getElementById('acorc');
    if (cal.innerHTML == 'Mostrar más salas en Cali') cal.innerHTML = 'Mostrar menos salas';
    else cal.innerHTML = 'Mostrar más salas en Cali'; 
}

function cambioc() {
    var cal = document.getElementById('acorc');
    if (cal.innerHTML == 'Mostrar más salas en Medellín') cal.innerHTML = 'Mostrarr menos salas';
    else cal.innerHTML = 'Mostrar más salas en Medellín'; 
}

function cambioc() {
    var cal = document.getElementById('acorc');
    if (cal.innerHTML == 'Mostrar más salas en Barranquilla') cal.innerHTML = 'Mostrarr menos salas';
    else cal.innerHTML = 'Mostrar más salas en Barranquilla'; 
}
