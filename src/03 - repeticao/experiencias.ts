import promptSync from 'prompt-sync';
const prompt = promptSync();

const qtdeCasos = Number(prompt("Quantos casos de teste serao digitados? "));
let C = 0;
let S = 0;
let R = 0;
let total = 0;

for(let i = 1; i <= qtdeCasos; i++){
    let qtdeCobaias = Number(prompt("Quantidade de cobaias: "));

    total += qtdeCobaias

    let tipo = prompt("Tipo de cobaia: ");

    if(tipo.toUpperCase() !== "C" && tipo.toUpperCase() !== "S" && tipo.toUpperCase() !== "R"){
        tipo = prompt("Tipo de cobaia invalido, escolha entre C (Coelho), S (Sapo) ou R (Rato): ");
    }
    else if(tipo.toUpperCase() == "C"){
        C += qtdeCobaias;
    }
    else if(tipo.toUpperCase() == "S"){
        S += qtdeCobaias;
    }
    else{
        R += qtdeCobaias;
    }
}

const percentC = (C / total) * 100;
const percentR = (R / total) * 100;
const percentS = (S / total) * 100;

console.log("RELATORIO FINAL:");
console.log(`Total = ${total} cobaias`);
console.log(`Total de coelhos = ${C}`);
console.log(`Total de ratos = ${R}`);
console.log(`Total de sapos = ${S}`);
console.log(`Percentual de coelhos: ${percentC.toFixed(2)}`);
console.log(`Percentual de ratos: ${percentR.toFixed(2)}`);
console.log(`Percentual de sapos: ${percentS.toFixed(2)}`);
