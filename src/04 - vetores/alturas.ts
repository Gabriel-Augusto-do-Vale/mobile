import promptSync from 'prompt-sync';
const prompt = promptSync();

const nomes: string[] = [];
const idades: number[] = [];
const alturas: number[] = [];
let somaAlturas = 0;
const nomesMenos16: string[] = [];

const qtd_pessoas = Number(prompt("Quantas pessoas serao digitadas? "));

for(let i = 0; i < qtd_pessoas; i++){
    console.log(`Dados da ${i+1}a pessoa:`);
    const nome = prompt("Nome: ");
    const idade = Number(prompt("Idade: "));
    const altura = Number(prompt("Altura: "));

    nomes.push(nome);
    idades.push(idade);
    alturas.push(altura);
    somaAlturas += altura;

    if(idade < 16){
        nomesMenos16.push(nome);
    }
}

const mediaAlturas = somaAlturas / qtd_pessoas;
console.log("Altura média: " + mediaAlturas.toFixed(2));

const porcentagemMenos16 = (nomesMenos16.length / qtd_pessoas) * 100;
console.log(`Pessoas com menos de 16 anos: ${porcentagemMenos16.toFixed(1)}%`);

for(const nome of nomesMenos16){
    console.log(nome);
}