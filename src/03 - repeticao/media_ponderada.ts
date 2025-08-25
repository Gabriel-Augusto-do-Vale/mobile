import promptSync from 'prompt-sync';
const prompt = promptSync();

const n = Number(prompt("Quantos casos você vai digitar? "));
let nota;

for(let i = 1; i <= n; i++){
    let soma = 0;
    console.log("Digite tres numeros: ");

    for(let j = 1; j <= 3; j++){
        nota = Number(prompt(""));

        if(j == 1){
            soma += nota * 2;
        }
        else if(j == 2){
            soma += nota * 3;
        }
        else{
            soma += nota * 5;
        }
    }
    let media = 0;
    media = soma / 10;
    console.log(`MEDIA = ${media.toFixed(1)}`);
    
}