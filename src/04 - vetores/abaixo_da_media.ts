import promptSync from 'prompt-sync';
const prompt = promptSync();

const valores: number[] = [];
let soma = 0;

const qtd_elementos = Number(prompt("Quantos elementos vai ter o vetor? "));

for(let i = 0; i < qtd_elementos; i++){
    const n = Number(prompt("Digite um numero: "));
    valores.push(n);
    soma += n;
}

const media = soma / qtd_elementos;
console.log("MEDIA DO VETOR = " + media.toFixed(3));

console.log("ELEMENTOS ABAIXO DA MEDIA:");
for(const n of valores){
    if(n < media){
        console.log(n.toFixed(1));
    }
}