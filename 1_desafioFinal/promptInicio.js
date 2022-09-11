
export function reglas() {
    let input = prompt("¿Querés conocer las reglas de cudoku? - Favor responder SI o NO");

    if (input === null) {
        return; //break out of the function early
    }
    switch (input.toUpperCase()) {
        case 'SI':
            alert("El cudoku es una variación del sudoku original. La idea es integrar los sudokus de cada una de las caras del cubo a través de los cuadrados que estan en el medio de cada uno de los lados")
            break;
        case 'NO':
            break;
        default:
            alert("Favor responder SI o NO");
            reglas();

    }

}

