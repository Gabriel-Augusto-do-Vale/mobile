import promptSync from 'prompt-sync';
const prompt = promptSync();

const nomes: string[] = [];
const notas1: number[] = [];
const notas2: number[] = [];

const qtd_alunos: number = Number(prompt("Quantos alunos serão digitados? "));

for (let i = 0; i < qtd_alunos; i++) {
    console.log(`Digite nome, primeira e segunda nota do ${i + 1}º aluno:`);

    const nome: string = prompt("Nome: ");
    const n1: number = Number(prompt("Nota 1: "));
    const n2: number = Number(prompt("Nota 2: "));

    nomes.push(nome);
    notas1.push(n1);
    notas2.push(n2);
}

console.log("\nAlunos aprovados:");

for (let i = 0; i < qtd_alunos; i++) {
    const n1 = notas1[i] ?? 0;
    const n2 = notas2[i] ?? 0;
    const media: number = (n1 + n2) / 2;

    if (media >= 6.0) {
        console.log(`${nomes[i]} - Média: ${media.toFixed(1)}`);
    }
}