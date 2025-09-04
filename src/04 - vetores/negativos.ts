import promptSync from 'prompt-sync';
const prompt = promptSync();

let n = [];
let qtde = Number(prompt("Quantos numeros você vai digitar?"));

while(true){
    if(qtde > 10 || qtde <= 0){
        let qtde = Number(prompt("Numero invalido, coloque um numero entre 1 e 10: "));
    }
    else{
        break;
    }
}

for(let i = 1; i <= qtde; i++){
    let valor = Number(prompt("Digite um numero: "));
    n.push(valor)
}