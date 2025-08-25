import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log("Digite dois numeros: ");
let X = Number(prompt(""));
let Y = Number(prompt(""));

while (true){
    if(X > Y){
        console.log("DECRESCENTE!");
    }
    else if(Y > X){
        console.log("CRESCENTE!");
    }
    else{
        break;
    }

    console.log("Digite outros dois números:");
    X = Number(prompt(""));
    Y = Number(prompt(""));

    if (X === Y){
        break;
    }
    else if(X > Y){
        console.log("DECRESCENTE!")
    }
    else if(Y > X){
        console.log("CRESCENTE!")
    }
}