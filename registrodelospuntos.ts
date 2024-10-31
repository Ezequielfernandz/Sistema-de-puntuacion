interface Puntos {
    punto: number;
}

let EquipoRojo: Puntos = {
    punto: 0
};

let EquipoNegro: Puntos = {
    punto: 0
};

// Obtener los elementos de entrada de puntos para el equipo rojo
const handballInputEquipoRojo = document.getElementById("handball-EquipoRojo") as HTMLInputElement;
const ajedresInputEquipoRojo = document.getElementById("ajedres-EquipoRojo") as HTMLInputElement;
const resistenciaInputEquipoRojo = document.getElementById("resistencia-EquipoRojo") as HTMLInputElement;

// Obtener los elementos de entrada de puntos para el equipo negro
const handballInputEquipoNegro = document.getElementById("handball-EquipoNegro") as HTMLInputElement;
const ajedresInputEquipoNegro = document.getElementById("ajedres-EquipoNegro") as HTMLInputElement;
const resistenciaInputEquipoNegro = document.getElementById("resistencia-EquipoNegro") as HTMLInputElement;

// Elemento donde se mostrará el resultado
const resultadoOutput = document.getElementById("resultado") as HTMLElement;

// Función para agregar puntos a cada equipo
function agregarpuntos(equipo: string): void {
    if (equipo === "EquipoRojo") {
        EquipoRojo.punto += parseInt(handballInputEquipoRojo.value, 10) || 0;
        EquipoRojo.punto += parseInt(resistenciaInputEquipoRojo.value, 10) || 0;
        EquipoRojo.punto += parseInt(ajedresInputEquipoRojo.value, 10) || 0;
    } else if (equipo === "EquipoNegro") {
        EquipoNegro.punto += parseInt(handballInputEquipoNegro.value, 10) || 0;
        EquipoNegro.punto += parseInt(resistenciaInputEquipoNegro.value, 10) || 0;
        EquipoNegro.punto += parseInt(ajedresInputEquipoNegro.value, 10) || 0;
    }
}

// Función para mostrar los resultados
function mostrarResultados(): void {
    let resultado = "";
    if (EquipoRojo.punto > EquipoNegro.punto) {
        resultado = "Equipo Rojo es el ganador con " + EquipoRojo.punto + " puntos";
    } else if (EquipoRojo.punto < EquipoNegro.punto) {
        resultado = "Equipo Negro es el ganador con " + EquipoNegro.punto + " puntos";
    } else {
        resultado = "Ambos equipos están empatados con " + EquipoRojo.punto + " puntos";
    }

    resultadoOutput.innerText = resultado;
}
