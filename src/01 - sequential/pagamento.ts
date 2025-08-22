import promptSync from 'prompt-sync';
const prompt = promptSync();

const nome = prompt("Nome: ");
const hora = Number(prompt("Valor da hora: "));
const trabalhado = Number(prompt("Horas trabalhadas: "));

const pagamento = trabalhado * hora;

console.log(`O pagamento para ${nome} deve ser ${pagamento.toFixed(2)}`);