import promptSync from 'prompt-sync';
const prompt = promptSync();

const senha = 2002;
let tentativa = 0;

console.log("Digite a senha:")
tentativa = Number(prompt(""));

while(senha !== tentativa){
    tentativa = Number(prompt("Senha Invalida! Tente novamente: "));
}

console.log("Acesso permitido!");