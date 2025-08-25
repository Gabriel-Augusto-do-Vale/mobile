import promptSync from 'prompt-sync';
const prompt = promptSync();

let codigo;
let alcool = 0;
let gasolina = 0;
let diesel = 0;

while(true){
    codigo = Number(prompt("Informe um codigo (1, 2, 3) ou 4 para parar: "));
    if(codigo == 4){
        break;
    }
    else if(codigo == 1){
        alcool++;
    }
    else if(codigo == 2){
        gasolina++;
    }
    else if(codigo == 3){
        diesel++;
    }
    else{

    }
}

console.log("MUITO OBRIGADO");
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);