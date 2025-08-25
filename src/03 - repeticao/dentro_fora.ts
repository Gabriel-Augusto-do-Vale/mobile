import promptSync from 'prompt-sync';
const prompt = promptSync();

const x = Number(prompt("Quantos numeros voce vai digitar? "));
let dentro = 0;
let fora = 0;

for(let i = 1; i <= x; i++){
    let num = Number(prompt("Digite um numero: "));
    if(num >= 10 && num <= 20){
        dentro++;
    }
    else{
        fora++
    }
}

console.log(`${dentro} DENTRO`);
console.log(`${fora} FORA`);

