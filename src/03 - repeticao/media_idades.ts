import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log("Digite as idades: ");
let idade_total = 0;
let qtde = 0;

let idade_atual: number = Number(prompt("")); 

while (idade_atual >= 0) {
    idade_total += idade_atual;
    qtde++;

    idade_atual = Number(prompt("")); 
}

const media = idade_total / qtde;

if (qtde > 0) {
    console.log(`MEDIA = ${media.toFixed(2)}`);
} else {
    console.log("IMPOSSIVEL CALCULAR");
}
