import promptSync from 'prompt-sync';
const prompt = promptSync();

const PrecoBasico = 50;
const TempoBasico = 100;
const MinutosTotal = Number(prompt("Digite a quantidade de minutos: "));


if(MinutosTotal > TempoBasico){
    const TempoAdicional = MinutosTotal - TempoBasico;
    const PrecoAdicional = TempoAdicional * 2;
    const PrecoTotal = PrecoAdicional + PrecoBasico;
    console.log(`Valor a pagar: R$ ${PrecoTotal.toFixed(2)}`);
}
else{
    console.log(`Valor a pagar: R$ ${PrecoBasico.toFixed(2)}`);
}