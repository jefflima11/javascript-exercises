/*
    2) O IMC - Indice de massa corporal é um criterio da organização mundial de saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela a baixo.

    IMC  em adulto condição:
    - Abaixo de 18.5 abaixo do peso;
    - Entre 18.5 e 25 peso normnal;
    - Entre 25 e 30 acima do peso;
    - Entre 30 e 40 obeso;
    - Acima de 40 obsidade grave;
*/

const peso = 90;
const altura = 1.77;

const imc = peso / (altura * altura);
console.log('Seu IMC: '+ imc.toFixed(2));

if (imc < 18.5) {
    console.log('Você esta a baixo do peso!');
} else if(imc > 18.5 && imc < 25) {
    console.log('Você está em seu peso normal!');
} else if (imc > 25 && imc < 30) {
    console.log('Você está acima do peso!');
} else if (imc > 30 && imc < 40) {
    console.log('Você está obeso!');
} else {
    console.log('Você está em obesidade grave!');
}