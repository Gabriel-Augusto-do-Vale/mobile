import promptSync from 'prompt-sync';
const prompt = promptSync();

const valor = Number(prompt("Deseja a tabuada para qual valor? "));
let resultado = 0;

for(let i = 1; i <= 10; i++){
    resultado = valor * i;
    console.log(`${valor} x ${i} = ${resultado}`);
}