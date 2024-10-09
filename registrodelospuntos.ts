const equipos = {
    rojo: { handball: 0, ajedrez: 0, resistencia: 0 },
    negro: { handball: 0, ajedrez: 0, resistencia: 0 }
};


function agregarPuntos(equipo) {
    const handball = parseInt(document.getElementById(`Handball-${equipo.charAt(0)}`).value) || 0;
    const ajedrez = parseInt(document.getElementById(`Ajedrez-${equipo.charAt(0)}`).value) || 0;
    const resistencia = parseInt(document.getElementById(`Resistencia-${equipo.charAt(0)}`).value) || 0;

    
    equipos[equipo].handball += handball;
    equipos[equipo].ajedrez += ajedrez;
    equipos[equipo].resistencia += resistencia;

    
    document.getElementById(`Handball-${equipo.charAt(0)}`).value = '';
    document.getElementById(`Ajedrez-${equipo.charAt(0)}`).value = '';
    document.getElementById(`Resistencia-${equipo.charAt(0)}`).value = '';
}


function mostrarResultados() {
    const totalRojo = equipos.rojo.handball + equipos.rojo.ajedrez + equipos.rojo.resistencia;
    const totalNegro = equipos.negro.handball + equipos.negro.ajedrez + equipos.negro.resistencia;

    let resultadoTexto = `Total Equipo Rojo: ${totalRojo} puntos<br>`;
    resultadoTexto += `Total Equipo Negro: ${totalNegro} puntos<br>`;

    if (totalRojo > totalNegro) {
        resultadoTexto += 'El Equipo Rojo tiene más puntos.';
    } else if (totalNegro > totalRojo) {
        resultadoTexto += 'El Equipo Negro tiene más puntos.';
    } else {
        resultadoTexto += 'Ambos equipos tienen la misma cantidad de puntos.';
    }

    document.getElementById('resultado').innerHTML = resultadoTexto;
}