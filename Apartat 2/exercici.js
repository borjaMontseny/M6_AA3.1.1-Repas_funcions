// borjaMontseny DAW2 M06 2023
do {
    let frase = prompt("Introdueix una frase, o 0 per acabar");
    if (frase !== "0") {
        let fraseMayus = frase.toUpperCase;
        document.write("<p>Frase: <b>" + frase + "</b></p>");
        document.write("<p>A: " + fraseMayus.replace(/[^A]/g, "").length + "</p>");
        document.write("<p>E: " + fraseMayus.replace(/[^E]/g, "").length + "</p>");
        document.write("<p>I: " + fraseMayus.replace(/[^I]/g, "").length + "</p>");
        document.write("<p>O: " + fraseMayus.replace(/[^O]/g, "").length + "</p>");
        document.write("<p>U: " + fraseMayus.replace(/[^U]/g, "").length + "</p>");
    }
} while (frase !== "0");