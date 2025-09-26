function obtenerActividad(dia) {
    switch (dia) {
        case "Lunes":
            return "Debes atender un cliente específico.";
        case "Martes":
            return "Visitas una agencia fuera de la ciudad.";
        case "Miércoles":
            return "Debes llevar a tu hija al ballet.";
        case "Jueves":
            return "Debes priorizar entregas de desarrollo.";
        case "Viernes":
            return "Debes atender problemas de manera remota.";
        case "Sábado":
            return "Debes hacer lo que tu esposa quiera.";
        default:
            return "No tienes actividades programadas para hoy.";
    }
}

function mostrarRecordatorio() {
    const dia = document.getElementById("dia").value;
    const mensaje = document.getElementById("mensaje").value;
    const actividad = obtenerActividad(dia);
    let resultado = "";

    if (dia) {
        resultado = `<strong>Recordatorio:</strong> ${actividad}`;
        if (mensaje.trim() !== "") {
            resultado += `<br><strong>Mensaje personalizado:</strong> ${mensaje}`;
        }
    } else {
        resultado = "Por favor selecciona un día de la semana.";
    }

    document.getElementById("resultado").innerHTML = resultado;
}