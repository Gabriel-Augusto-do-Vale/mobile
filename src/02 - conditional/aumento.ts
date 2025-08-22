import promptSync from 'prompt-sync';
const prompt = promptSync();

const salario = Number(prompt("Digite o salario da pessoa: "));
let porcentagem = 0

if(salario <= 1000){
    porcentagem = 20;
}
else if(salario <= 3000){
    porcentagem = 15;
}
else if(salario <= 8000){
    porcentagem = 10;
}
else{
    porcentagem = 5;
}

const aumento = salario/100 * porcentagem;
const novoSalario = salario + aumento;

console.log(`Novo salario = R$${novoSalario.toFixed(2)}`);
console.log(`Aumento = R$${aumento.toFixed(2)}`);
console.log(`Porcentagem = ${porcentagem}%`);



