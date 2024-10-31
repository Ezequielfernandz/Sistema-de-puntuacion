// Función para agregar puntos a cada equipo y mostrar el total
function agregarPuntos(equipo) {
    let totalPuntos = 0;
    
    // Capturar los puntos de cada deporte según el equipo
    if (equipo === "rojo") {
        const handball = parseInt(document.getElementById("Handball-rojo").value) || 0;
        const ajedrez = parseInt(document.getElementById("Ajedrez-rojo").value) || 0;
        const resistencia = parseInt(document.getElementById("Resistencia-rojo").value) || 0;
        
        totalPuntos = handball + ajedrez + resistencia;
        document.getElementById("resultadoRojo").innerText = `Total Equipo Rojo: ${totalPuntos}`;
        
    } else if (equipo === "negro") {
        const handball = parseInt(document.getElementById("Handball-negro").value) || 0;
        const ajedrez = parseInt(document.getElementById("Ajedrez-negro").value) || 0;
        const resistencia = parseInt(document.getElementById("Resistencia-negro").value) || 0;
        
        totalPuntos = handball + ajedrez + resistencia;
        document.getElementById("resultadoNegro").innerText = `Total Equipo Negro: ${totalPuntos}`;
    }
}
