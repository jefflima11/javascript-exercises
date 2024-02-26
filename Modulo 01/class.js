/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor 
    gasto em reais para realizar este percurso.
*/

class carro {
    marca;
    cor;
    gastoMedioKMporLt;

    constructor(marca,cor,gastoMedioKMporLt){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKMporLt = gastoMedioKMporLt;
    }

    gastoEmReais(precoCombustivel,kmRodado) {
        return (kmRodado * precoCombustivel) / this.gastoMedioKMporLt;
    }
}

const civic = new carro('Honda','Preto','20');
console.log(civic.gastoEmReais(5.8,100));

const maveric = new carro('sei la','azul','10');
console.log(maveric.gastoEmReais(5.8,100));