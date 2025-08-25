import promptSync from 'prompt-sync';
const prompt = promptSync();

const n = Number(prompt("Quantos numeros voce vai digitar? "));

for(let i = 1; i <= n;i++){
    let num = Number(prompt("Digite um numero: "));

    if(num > 0){
        if(num % 2 == 0){
            console.log("PAR POSITIVO");
        }
        else{
            console.log("IMPAR POSITIVO");
        }
    }

    else if(num < 0){
        if(num % 2 == 0){
            console.log("PAR NEGATIVO");
        }
        else{
            console.log("IMPAR NEGATIVO");
        }
    }

    else{
        console.log("NULO");
    }
}