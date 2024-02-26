/*
    1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovado;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

let n1 = 5;
let n2 = 9;
let n3 = 8;

let media = (n1 + n2 + n3) / 3;

if (media < 5) {
    console.log('Sua nota foi: ' + media.toFixed(2) + '\nReprovado');
} else if(media > 7) {
    console.log('Sua nota foi: ' + media.toFixed(2) + '\nPassou de semestre');
} else {
    console.log('Sua nota foi: ' + media.toFixed(2) + '\nRecuperação');
}