import promptSync from 'prompt-sync';
const prompt = promptSync();

const pares: number[] = [];
let somaPares = 0;

const qtd_elementos = Number(prompt("Quantos elementos vai ter o vetor? "));

for(let i = 0; i < qtd_elementos; i++){
    const n = Number(prompt("Digite um numero: "));
    if (n % 2 === 0) {
        pares.push(n);
        somaPares += n;
    }
}

if(pares.length === 0){
    console.log("NENHUM NUMERO PAR");
} else {
    const mediaPares = somaPares / pares.length;
    console.log("MEDIA DOS PARES = " + mediaPares.toFixed(1));
}