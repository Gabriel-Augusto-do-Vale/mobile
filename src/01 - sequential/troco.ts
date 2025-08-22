import promptSync from 'prompt-sync';
const prompt = promptSync();

const preco = Number(prompt("Preço unitario do produto: "));
const quant = Number(prompt("Quantidade: "));
const dinheiro = Number (prompt("Dinheiro recebido: "));

const compra = preco * quant;
const troco = dinheiro - compra;

console.log(`TROCO: ${troco.toFixed(2)}`);