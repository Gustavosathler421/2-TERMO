const entrada = require("readline-sync");

let peso = entrada.questionFloat("Digite o peso da peca em gramas: ");

if (peso >= 95 && peso <= 105) {
    console.log("PEÇA APROVADA");
} else {
    console.log("PEÇA REPROVADA");
}

console.log("Peso informado:", peso, "g");