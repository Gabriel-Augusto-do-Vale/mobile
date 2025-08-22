import promptSync from 'prompt-sync';
const prompt = promptSync();

const largura = Number(prompt("Largura do terreno: "));
const comprimento = Number(prompt("Comprimento do terreno: "));
const preco = Number(prompt("Qual o valor do metro quadrado: "));

const area = largura * comprimento;
const total = preco * area;

console.log(`AREA = ${area.toFixed(4)}`);
console.log(`PRECO = ${total.toFixed(4)}`);
