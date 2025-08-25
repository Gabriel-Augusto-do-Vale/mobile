import promptSync from 'prompt-sync';
const prompt = promptSync();

let n = Number(prompt("Digite o valor de N: "));
let fatorial = 1;

while(true){
    if(n > 15 || n < 0){
        n = Number(prompt("Numero invalido, escolha entre 0 e 15: "));
    }

    else{
        break;
    }
}

for(let i = n; i > 0; i--){
    fatorial *= i;
}

console.log(`FATORIAL = ${fatorial}`);
