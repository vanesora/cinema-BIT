// Fecha en barra superior

var f = new Date();
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
document.getElementById("fecha").innerHTML = f.getDay() + " de " + meses[f.getMonth()] + " de " + f.getFullYear() + ", " + f.getUTCHours() + ":" + f.getUTCMinutes() + ":" + f.getUTCSeconds();
