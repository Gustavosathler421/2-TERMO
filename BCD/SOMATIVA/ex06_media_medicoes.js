const entrada = require('readline-sync');

let soma = 0;

for (let i = 0; i < 5; i++) {
    console.log(`\n--- Medição ${i + 1} ---`);
    let medicao = entrada.questionFloat("Digite a medicao: ");

    soma += medicao;
}

const media = soma / 5;

console.log("\n======= RESULTADO FINAL =======");
console.log(`Soma das medições: ${soma}`);
console.log(`Média final: ${media}`);
