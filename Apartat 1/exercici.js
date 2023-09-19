// borjaMontseny DAW2 M06
do {
    let frase = prompt("Introdueix, o 0 per acabar");
    if (frase !== "0") {
        document.write("<p>Frase: <b>" + frase + "</b></p>");
        // Creem un array amb tots els contadors i cridem a una funcio que els tornará omplerts
        let [totalA, totalE, totalI, totalO, totalU] = contarVocals(frase);
        document.write("<p>A: " + totalA + "</p>");
        document.write("<p>E: " + totalE + "</p>");
        document.write("<p>I: " + totalI + "</p>");
        document.write("<p>O: " + totalO + "</p>");
        document.write("<p>U: " + totalU + "</p>");
    }
} while (frase !== "0");

function contarVocals(frase) {
    let fraseMayus = frase.toUpperCase();

    let totalA = 0;
    let totalE = 0;
    let totalI = 0;
    let totalO = 0;
    let totalU = 0;

    /*
    Comparem lletra per lletra de la frase en mayúscula amb les vocals
    i si coincideix sumem 1 al contador
    */
    for (let index = 0; index < fraseMayus.length; index++) {
        let lletra = fraseMayus[index];
        if (lletra === "A") {
            totalA++;
        } else if (lletra === "E") {
            totalE++;
        } else if (lletra === "I") {
            totalI++;
        } else if (lletra === "O") {
            totalO++;
        } else if (lletra === "U") {
            totalU++;
        }
    }

    // Retornem un array amb els contadors
    return [totalA, totalE, totalI, totalO, totalU];
}
