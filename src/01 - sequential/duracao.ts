import promptSync from 'prompt-sync';
const prompt = promptSync();

const segundos = Number(prompt("Digite a duracao em segundos: "));

const horas = Math.floor(segundos / 3600);
const minutos = Math.floor((segundos % 3600) / 60);
const RestoSegundos = segundos % 60;

console.log(`${horas}:${minutos}:${RestoSegundos}`);