import promptSync from 'prompt-sync';
const prompt = promptSync();

let lucroAbaixo10 = 0;
let lucroEntre10e20 = 0;
let lucroAcima20 = 0;
let totalCompra = 0;
let totalVenda = 0;

const qtd_produtos = Number(prompt("Serao digitados dados de quantos produtos? "));

for(let i = 0; i < qtd_produtos; i++){
    console.log(`Produto ${i+1}:`);
    const nome = prompt("Nome: ");
    const precoCompra = Number(prompt("Preco de compra: "));
    const precoVenda = Number(prompt("Preco de venda: "));

    totalCompra += precoCompra;
    totalVenda += precoVenda;

    const lucro = ((precoVenda - precoCompra) / precoCompra) * 100;

    if (lucro < 10) {
        lucroAbaixo10++;
    } else if (lucro <= 20) {
        lucroEntre10e20++;
    } else {
        lucroAcima20++;
    }
}

console.log("RELATORIO:");
console.log("Lucro abaixo de 10%: " + lucroAbaixo10);
console.log("Lucro entre 10% e 20%: " + lucroEntre10e20);
console.log("Lucro acima de 20%: " + lucroAcima20);
console.log("Valor total de compra: " + totalCompra.toFixed(2));
console.log("Valor total de venda: " + totalVenda.toFixed(2));
console.log("Lucro total: " + (totalVenda - totalCompra).toFixed(2));