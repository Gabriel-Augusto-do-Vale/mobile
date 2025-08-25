import promptSync from 'prompt-sync';
const prompt = promptSync();

let primeira_nota = 0;
let segunda_nota = 0;

while(true){
    primeira_nota = Number(prompt("Digite a primeira nota: "));
    for(primeira_nota; primeira_nota < 0 || primeira_nota > 10;){
        primeira_nota = Number(prompt("Valor invalido! Tente novamente: "));
    }

    segunda_nota = Number(prompt("Digite a segunda nota: "))
    for(segunda_nota; segunda_nota < 0 || segunda_nota > 10;){
        segunda_nota = Number(prompt("Valor invalido! Tente novamente: "));
    }

    break;
}

const media = (primeira_nota + segunda_nota) / 2;
console.log(`MEDIA = ${media.toFixed(2)}`);