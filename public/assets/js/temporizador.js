let fechaInicio = new Date();
let finDeMes = new Date(fechaInicio.getFullYear(), fechaInicio.getMonth() + 1, 0);
let tiempoInicio = fechaInicio.getTime(); // Almacena el tiempo en milisegundos en el que comenzó el temporizador

let horas = fechaInicio.getHours();
let minutos = fechaInicio.getMinutes();
let segundos = fechaInicio.getSeconds();
cargarTiempo();

function cargarTiempo() {
    let ahora = new Date(); // Obtiene la fecha y hora actual en cada iteración

    // Calcula la diferencia de tiempo desde que comenzó el temporizador
    let tiempoRestante = finDeMes.getTime() - ahora.getTime(); // Calcula el tiempo restante hasta el final del mes

    let segundosRestantes = Math.floor((tiempoRestante / 1000) % 60);
    let minutosRestantes = Math.floor((tiempoRestante / 1000 / 60) % 60);
    let horasRestantes = Math.floor((tiempoRestante / (1000 * 60 * 60)) % 24);
    let diasRestantes = Math.ceil(tiempoRestante / (1000 * 60 * 60 * 24)); // Redondeamos hacia arriba para asegurarnos de contar el día actual

    document.getElementById('segundos').innerHTML = segundosRestantes < 10 ? `0${segundosRestantes}` : segundosRestantes;
    document.getElementById('minutos').innerHTML = minutosRestantes < 10 ? `0${minutosRestantes}` : minutosRestantes;
    document.getElementById('horas').innerHTML = horasRestantes < 10 ? `0${horasRestantes}` : horasRestantes;
    document.getElementById('dias').innerHTML = diasRestantes < 10 ? `0${diasRestantes}` : diasRestantes;
}

setInterval(cargarTiempo, 1000);