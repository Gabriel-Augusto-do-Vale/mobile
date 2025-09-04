import promptSync from 'prompt-sync';
const prompt = promptSync();

const alturas: number[] = [];
const generos: string[] = [];
let menorAltura = Infinity;
let maiorAltura = 0;
let somaAlturaMulheres = 0;
let countMulheres = 0;
let countHomens = 0;

const qtd_pessoas = Number(prompt("Quantas pessoas serao digitadas? "));

for(let i = 0; i < qtd_pessoas; i++){
    const altura = Number(prompt(`Altura da ${i+1}a pessoa: `));
    const genero = prompt(`Genero da ${i+1}a pessoa: `);

    alturas.push(altura);
    generos.push(genero);

    if(altura < menorAltura){
        menorAltura = altura;
    }
    if(altura > maiorAltura){
        maiorAltura = altura;
    }

    if(genero.toUpperCase() === 'F'){
        somaAlturaMulheres += altura;
        countMulheres++;
    } else if (genero.toUpperCase() === 'M'){
        countHomens++;
    }
}

console.log("Menor altura = " + menorAltura.toFixed(2));
console.log("Maior altura = " + maiorAltura.toFixed(2));

if(countMulheres > 0){
    const mediaAlturaMulheres = somaAlturaMulheres / countMulheres;
    console.log("Media das alturas das mulheres = " + mediaAlturaMulheres.toFixed(2));
}

console.log("Numero de homens = " + countHomens);