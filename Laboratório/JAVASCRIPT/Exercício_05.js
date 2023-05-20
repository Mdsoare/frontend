/*
Autor: Marcelo Soares
Data: 2023-05-19
Exercício 05: Escreva um código que leia quatro numeros, calcule e exiba a média ponderada.Considere que a média é ponderada e que o peso das notas é 1, 2, 3 e 4.
*/

const PESO1 = 1;
const PESO2 = 2;
const PESO3 = 3;
const PESO4 = 4;
let mediaPonderada = 0;
let nota1 = 5;
let nota2 = 4;
let nota3 = 7;
let nota4 = 8;

mediaPonderada = ((nota1*PESO1) + (nota2*PESO2) + (nota3*PESO3) + (nota4*PESO4))/ 10;
console.log("A média ponderada do aluno é:", mediaPonderada);