import promptSync from 'prompt-sync';
const prompt = promptSync();

const raio = Number(prompt("Digite o valor do raio do circulo: "));
const area = raio * 2 * Math.PI;

console.log(`AREA: ${area.toFixed(3)}`);