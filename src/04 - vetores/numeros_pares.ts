import promptSync from 'prompt-sync';
const prompt = promptSync();

const pares: number[] = [];

const qtd_num = Number(prompt("Quantos numeros voce vai digitar? "));

for(let i = 0; i < qtd_num; i++){
    const n = Number(prompt("Digite um numero: "));
    if (n % 2 === 0) {
        pares.push(n);
    }
}

console.log("NUMEROS PARES:");
console.log(pares.join(" "));
console.log("QUANTIDADE DE PARES = " + pares.length);