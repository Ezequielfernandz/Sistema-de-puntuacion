interface puntos{
    punto: number;
}

let EquipoRojo: puntos = {
        punto: 0
};

let EquipoNegro: puntos = {
    punto: 0
};

const handballInputEquipoRojo = document.getElementById("handball-EquipoRojo") as HTMLInputElement;
const ajedresInputEquipoRojo = document.getElementById("ajedres-EquipoRojo") as HTMLInputElement;
const resistenciaInputEquipoRojo = document.getElementById("resistencia-EquipoRojo") as HTMLInputElement;

const handballInputEquipoNegro = document.getElementById("handball-EquipoNegro") as HTMLInputElement;
const ajedresInputEquipoNegro = document.getElementById("ajedres-EquipoNegro") as HTMLInputElement;
const resistenciaInputEquipoNegro = document.getElementById("resistencia-EquipoNegro") as HTMLInputElement;

const resultadoOutput = document.getElementById("resultado") as HTMLInputElement;

function agregarPuntos(equipo: string): void{
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

function mostrarResultados(): void{
    let resultado = "";
    if (EquipoRojo.punto > EquipoNegro.punto) {
        resultado = "EquipoRojo es el ganador con" + EquipoRojo.punto + "puntos";

    } else if (EquipoRojo.punto < EquipoNegro.punto) {
        resultado = "EquipoNegro es el ganador con" + EquipoNegro.punto + "puntos";

    } else{
        resultado = "Ambos equipos estan empatados con" + EquipoRojo.punto + "puntos";

    }
    
    resultadoOutput.innerText = resultado;
}