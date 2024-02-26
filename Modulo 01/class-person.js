/*
    Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peca ao José para dizer o valor do seu imc;
*/


class pessoa {
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return 'a baixo do peso'
        } else if (imc > 18.5 && imc < 25) {
            return 'peso normal';
        } else if (imc > 25 && imc < 30) {
            return 'você esta acima do peso';
        } else if (imc > 30 && imc < 40) {
            return 'obesidade';
        } else {
            'obsedidade grave';
        }

    }

    exibirImc(){
        return `\nOlá ${this.nome} seu peso atual é ${this.peso}kg e sua altura ${this.altura} isso resulta em seu imc ${this.calcularImc().toFixed(2)}, oque classifica você em ${this.classificarImc()}`;
    }

}

const p1 = new pessoa('Jefferson',100,1.77);
console.log(p1.exibirImc());

const p2 = new pessoa('Jose',80,1.80);
console.log(p2.exibirImc());

const p3 = new pessoa('Amonha',120,1.85);
console.log(p3.exibirImc());

const p4 = new pessoa('Pedro',85,1.73);
console.log(p4.exibirImc());