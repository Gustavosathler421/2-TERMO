const entrada = require("readline-sync");

let pecasPorCiclo = entrada.questionFloat("Quantas pecas a maquina produz por ciclo? ")

let producaoAcumulada = 0;

for (let i = 1; i <= 10; i++) {
    producaoAcumulada = producaoAcumulada + pecasPorCiclo;

    console.log("Ciclo",i,"- Produção acumulada:",producaoAcumulada,"peças");
}
