import promptSync from 'prompt-sync';
const prompt = promptSync();

const numero1 = Number(prompt("Primeiro valor: "));
const numero2 = Number(prompt("Segundo valor: "));
const numero3 = Number(prompt("Terceiro valor: "));

if (numero1 <= numero2 && numero1 <= numero3){
    console.log(`MENOR: ${numero1}`);
}
else if(numero2 <= numero1 && numero2 <= numero3){
    console.log(`MENOR: ${numero2}`);
}
else{
    console.log(`MENOR: ${numero3}`);
}
