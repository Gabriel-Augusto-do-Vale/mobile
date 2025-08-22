import promptSync from 'prompt-sync';
const prompt = promptSync();

const nota1 = Number(prompt("Digite a primeira nota: "));
const nota2 = Number(prompt("Digite a segunda nota: "));

const media = (nota1 + nota2) / 2;

console.log(`NOTA FINAL: ${media.toFixed(2)}`);

if(media < 60){
    console.log("REPROVADO");
}
else{
    console.log("APROVADO");
}