import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log("Digite as tres instancias:");
const d1 = Number(prompt(""));
const d2 = Number(prompt(""));
const d3 = Number(prompt(""));

if(d1 >= d2 && d1 >= d3){
    console.log(`MAIOR DISTANCIA = ${d1.toFixed(2)}`);
}
else if(d2 >= d1 && d2 >= d3){
    console.log(`MAIOR DISTANCIA = ${d2.toFixed(2)}`);
}
else{
    console.log(`MAIOR DISTANCIA = ${d3.toFixed(2)}`);
}
