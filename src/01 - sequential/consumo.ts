import promptSync from 'prompt-sync';
const prompt = promptSync();

const distancia = Number(prompt("Distancia percorrida: "));
const combustivel = Number(prompt("Combustivel gasto: "));

const consumo = distancia / combustivel;

console.log(`Consumo medio: ${consumo.toFixed(3)}`);
