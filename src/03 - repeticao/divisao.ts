import promptSync from 'prompt-sync';
const prompt = promptSync();

const n = Number(prompt("Quantos casos você vai digitar? "));

for(let i = 1; i <= n; i++){
    let numerador = Number(prompt("Entre com o numerador: "));
    let denominador = Number(prompt("Entre com o denominador: "));
    let divisao = numerador / denominador;

    if(denominador == 0){
        console.log("DIVISAO IMPOSSIVEL")
    }
    else{
        console.log(`DIVISAO = ${divisao.toFixed(2)}`);
    }
}