import promptSync from 'prompt-sync';
const prompt = promptSync();

let X = 0;
let Y = 0;

while(true){
    console.log("Digite os valores das coordenadas X e Y")
    X = Number(prompt(""));
    Y = Number(prompt(""));
    if(X > 0 && Y > 0){
        console.log("QUADRANTE Q1");
    }
    else if(X > 0 && Y < 0){
        console.log("QUADRANTE Q4");
    }
    else if(X < 0 && Y > 0){
        console.log("QUADRANTE Q2");
    }
    else if(X < 0 && Y < 0){
        console.log("QUADRANTE Q3");
    }
    else{
        break;
    }
}