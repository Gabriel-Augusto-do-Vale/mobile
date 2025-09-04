import promptSync from 'prompt-sync';
const prompt = promptSync();

const nomes: string[] = [];
const idades: number[] = [];
let maisVelhoNome = "";
let maisVelhoIdade = 0;

const qtd_pessoas = Number(prompt("Quantas pessoas voce vai digitar? "));

for(let i = 0; i < qtd_pessoas; i++){
    console.log(`Dados da ${i+1}a pessoa:`);
    const nome = prompt("Nome: ");
    const idade = Number(prompt("Idade: "));

    nomes.push(nome);
    idades.push(idade);

    if(idade > maisVelhoIdade){
        maisVelhoIdade = idade;
        maisVelhoNome = nome;
    }
}

console.log("PESSOA MAIS VELHA: " + maisVelhoNome);