import promptSync from 'prompt-sync';
const prompt = promptSync();

const prod1 = 5;
const prod2 = 3.5;
const prod3 = 4.8;
const prod4 = 8.9;
const prod5 = 7.32;

const comprado = Number(prompt("Codigo do produto comprado: "));
const qtde = Number(prompt("Quantidade comprada: "));

let valor = 0;

if(comprado == 1){
    valor = prod1 * qtde;
    console.log(`Valor a pagar: R$ ${valor.toFixed(2)}`);
}
else if(comprado == 2){
    valor = prod2 * qtde;
    console.log(`Valor a pagar: R$ ${valor.toFixed(2)}`);
}
else if(comprado == 3){
    valor = prod3 * qtde;
    console.log(`Valor a pagar: R$ ${valor.toFixed(2)}`);
}
else if(comprado == 4){
    valor = prod4 * qtde;
    console.log(`Valor a pagar: R$ ${valor.toFixed(2)}`);
}
else if(comprado == 5){
    valor = prod5 * qtde;
    console.log(`Valor a pagar: R$ ${valor.toFixed(2)}`);
}
else{
    console.log("Produto não existente");
}