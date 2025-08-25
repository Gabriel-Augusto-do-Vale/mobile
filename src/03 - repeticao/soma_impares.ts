import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log("Digite dois numeros: ");
const X = Number(prompt(""));
const Y = Number(prompt(""));
let maior;
let menor;
let soma = 0;

if(X > Y){
    maior = X;
    menor = Y;
}
else{
    maior = Y;
    menor = X;
}

menor++;

for(menor; maior > menor;menor++){
    if(menor % 2 !== 0){
        soma += menor;
    }
}

console.log(`SOMA DOS IMPARES = ${soma}`);