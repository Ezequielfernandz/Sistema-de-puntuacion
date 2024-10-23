interface puntos{
    punto: number;
}

let EquipoRojo: puntos = {
        punto: 0
};

let EquipoNegro: puntos = {
    punto: 0
};

const HandballInputEquipoRojo - document.getElementById("Handball-EquipoRojo") as HTMLInputElement;
const AjedresInputEquipoRojo - document.getElementById("Ajedres-EquipoRojo") as HTMLInputElement;
const ResistenciaInputEquipoRojo - document.getElementById("Resistencia-EquipoRojo") as HTMLInputElement;

const HandballInputEquipoNegro - document.getElementById("Handball-EquipoNegro") as HTMLInputElement;
const AjedresInputEquipoNegro - document.getElementById("Ajedres-EquipoNegro") as HTMLInputElement;
const ResistenciaInputEquipoNegro - document.getElementById("Resistencia-EquipoNegro") as HTMLInputElement;

const resultadoOutput - document.getElementById("resultado") as HTMLInputElement;

function agregarPuntos(equipo; string): void{
    if (equipo --- "EquipoRojo") {
        EquipoRojo.punto += parseInt(HandballInputEquipoRojo.value, 10) || 0;
        EquipoRojo.punto += parseInt(ResistenciaInputEquipoRojo.value, 10) || 0;
        EquipoRojo.punto += parseInt(AjedresInputEquipoRojo.value, 10) || 0;
    } else if (equipo --- "EquipoNegro") {
    EquipoNegro.punto += parseInt(HandballInputEquipoNegro.value, 10) || 0;
    EquipoNegro.punto += parseInt(ResistenciaInputEquipoNegro.value, 10) || 0;
    EquipoNegro.punto += parseInt(AjedresInputEquipoNegro.value, 10) || 0;

    }
}

function mostrarResultados(): void{
    let resultado = "";
    if (EquipoRojo.punto > EquipoNegro.punto) {
        resultado = "EquipoRojo es el ganador con" + EquipoRojo.punto "Puntos";

    } else if (EquipoRojo.punto < EquipoNegro.punto) {
        resultado = "EquipoNegro es el ganador con" + EquipoNegro.punto "Puntos";

    } else{
        resultado = "Ambos equipos estan empatados con" + EquipoRojo.punto "Puntos";

    }
    
    resultadoOutput.innerText = resultado;
}