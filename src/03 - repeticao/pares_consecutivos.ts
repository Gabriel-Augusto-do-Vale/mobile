import promptSync from 'prompt-sync';
const prompt = promptSync();

let soma;
let X;

while(true){
    X = Number(prompt("Digite um numero inteiro: "));

    if(X == 0){
        break;
    }
    else if(X % 2 == 0){
        soma = X + (X+2) + (X+4) + (X+6) + (X+8);
    }
    else{
        soma = (X+1) + (X+3) + (X+5) + (X+7) + (X+9);
    }
    console.log(`SOMA = ${soma}`);
}
