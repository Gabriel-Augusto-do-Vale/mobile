import promptSync from 'prompt-sync';
const prompt = promptSync();

const preco_unitario = Number(prompt("Preço Unitário do produto: "));
const qtde = Number(prompt("Quantidade comprada: "));
const recebido = Number(prompt("Dinheiro recebido: "));

const preco_total = preco_unitario * qtde;
let troco = recebido - preco_total;

if(troco < 0){
    troco = troco * (0-1);
    if(troco < 1){
        console.log(`DINHEIRO INSUFICIENTE. FALTAM ${troco.toFixed(2)} CENTAVOS`);
    }
    else if(troco == 1 || troco < 2){
        console.log(`DINHEIRO INSUFICIENTE. FALTA ${troco.toFixed(2)} REAL`);
    }
    else{
        console.log(`DINHEIRO INSUFICIENTE. FALTAM ${troco.toFixed(2)} REAIS`);
    }
    
}
else if (troco == 0){
    console.log("VALOR EXATO, SEM TROCO A RECEBER")
}
else{
    console.log(`TROCO = ${troco.toFixed(2)}`);
}