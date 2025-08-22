import promptSync from 'prompt-sync';
const prompt = promptSync();

const a = Number(prompt("Coeficiente a: "));
const b = Number(prompt("Coeficiente b: "));
const c = Number(prompt("Coeficiente c: "));

const delta = Math.pow(b, 2) - (4*a*c);

const x1 = ((0-b) + delta) / (2 * a);
const x2 = ((0-b) - delta) / (2 * a);

console.log(`X1 = ${x1.toFixed(4)}`);
console.log(`X2 = ${x2.toFixed(4)}`);