/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
    1 - Preço do combutível;
    2 - Gasto médio de combústivel do carro por KM;
    3 - Distância em KM da viagem;

*/

const precoCombustivel = 5.56;
const gastoLtPorKm = 19.4;
const distanciaKm = 150;

const litrosConsumidos = distanciaKm / gastoLtPorKm ;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto);