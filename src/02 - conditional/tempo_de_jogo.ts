import promptSync from 'prompt-sync';
const prompt = promptSync();

const inicio = Number(prompt("Hora inicial: "));
const final = Number(prompt("Hora final: "));
let total = 0;

if(inicio == final){
   total = 24;
   console.log(`O JOGO DUROU ${total} HORA(S)`); 
}
else if(final > inicio){
    total = final - inicio;
    console.log(`O JOGO DUROU ${total} HORA(S)`); 
}
else if (inicio > final){
    total = (24-inicio) + final;
    console.log(`O JOGO DUROU ${total} HORA(S)`); 
}
else{
    console.log("ERRO");
}