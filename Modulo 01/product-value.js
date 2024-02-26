/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a docndição de pagmento escolhida e efetuar o cálculo adequado.

    Código condição de pagamento:
    - À vista débito, recebe 10% de desconto;
    - À vista no dinheiro ou pix, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta  mais juros de 10%;
*/

const valorProduto = 100;
const formaPagamento = 2;

if (formaPagamento === 1) {
    console.log(valorProduto - (valorProduto * 0.1));   
} else if (formaPagamento === 2) {
    console.log(valorProduto - (valorProduto * 0.15));   
} else if (formaPagamento === 3) {
    console.log(valorProduto);   
} else {
    console.log(valorProduto + (valorProduto * 0.1));   
}