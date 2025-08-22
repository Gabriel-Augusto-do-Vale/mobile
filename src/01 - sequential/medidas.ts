import promptSync from 'prompt-sync';
const prompt = promptSync();

const medidaA = Number(prompt("Digite a medida A: "));
const medidaB = Number(prompt("Digite a medida B: "));
const medidaC = Number(prompt("Digite a medida C: "));

const quadrado = Math.pow(medidaA, 2);
const retangulo = medidaA * medidaB;
const trapezio = ((medidaA + medidaB) * medidaC) / 2;

console.log(`QUADRADO: ${quadrado.toFixed(4)}`);
console.log(`RETANGULO: ${retangulo.toFixed(4)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(4)}`);