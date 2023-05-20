/*
Autor: Marcelo Soares
Data: 2023-05-19
Exercício 04: Escreva um código que leia três numeros de um aluno, calcule e exiba a média ponderada.
Considere que a média é ponderada e que o peso das notas é 2, 3 e 5.
*/

const PESO1 = 2;
const PESO2 = 3;
const PESO3 = 5;
let nota1 = 5;
let nota2 = 4;
let nota3 = 7;
let mediaPonderada = 0;

mediaPonderada = ((nota1*PESO1) + (nota2*PESO2) + (nota3*PESO3)) / 10;

console.log("A média ponderada do aluno é:", mediaPonderada);

