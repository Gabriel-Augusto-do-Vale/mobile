import promptSync from 'prompt-sync';
const prompt = promptSync();

const X = Number(prompt("Digite o valor de X: "));
let soma = 0;

if(X > 0){
    for(let i = 0; i <= X; i++){
        if(i % 2 !== 0){
            soma += i;
            console.log(`${i}`);
        }
    }
}
else{
    for(let i = 0; i >= X; i--){
        if(i % 2 !== 0){
            soma += i;
            console.log(`${i}`);
        }
    }
}
