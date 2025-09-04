import promptSync from 'prompt-sync';
const prompt = promptSync();

const valores: number[] = [];
let maiorValor = 0;
let posMaiorValor = 0;

const qtd_num = Number(prompt("Quanto numeros voce vai digitar? "));

for(let i = 0; i < qtd_num; i++){
    const n = Number(prompt("Digite um numero: "));
    valores.push(n);
    if(n > maiorValor){
        maiorValor = n;
        posMaiorValor = i;
    }
}

console.log("MAIOR VALOR = " + maiorValor.toFixed(1));
console.log("POSICAO DO MAIOR VALOR = " + posMaiorValor);