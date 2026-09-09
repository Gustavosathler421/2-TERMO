const entrada = require("readline-sync");

let pecasPorCiclo = entrada.questionFloat("Quantas pecas a maquina produz por ciclo? ")

let producaoAcumulada = 0;

for (let ciclo = 1; ciclo <= 10; ciclo++) {
    producaoAcumulada = producaoAcumulada + pecasPorCiclo;

    console.log(
        "Ciclo",
        ciclo,
        "- Produção acumulada:",
        producaoAcumulada,
        "peças"
    );
}
