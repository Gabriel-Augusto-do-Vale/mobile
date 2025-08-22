import promptSync from 'prompt-sync';
const prompt = promptSync();

const escala = prompt("Voce vai digitar a temperatura em qual escala (C/F)? ");

if(escala == "C" || escala == "c"){
    const temperaturaC = Number(prompt("Digite a temperatura em Celsius: "));
    const temperaturaF = temperaturaC * (9/5) + 32;
    console.log(`Temperatura equivalente em Fahrenheit: ${temperaturaF.toFixed(2)}`);
}
else if(escala == "F" || escala == "f"){
    const temperaturaF = Number(prompt("Digite a temperatura em Fahrenheit: "));
    const temperaturaC = (temperaturaF - 32) * 5/9;
    console.log(`Temperatura equivalente em Celsius: ${temperaturaC.toFixed(2)}`);
}
else{
    console.log("Escala não conhecida, digite F ou C");
}