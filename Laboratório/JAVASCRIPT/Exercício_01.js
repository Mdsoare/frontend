/*
Autor: Marcelo Soares
Data: 2023-05-19
Exercício 01: Escreva um código para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcule e escreva o valor do novo salário
*/

// Declarando as variáveis:
let salario = 1000; // valor aleatório
const PERCENTUAL = 1.15; // o mesmo que 15/100 = 15%
let aumento = 0; // Apenas para iniciar a variável

// Calculando reajuste:
aumento = salario * (PERCENTUAL);

// imprimindo rsultado:
console.log("O novo salário é", aumento);

// Outra forma, sem a variável intermediária: 
salario *= PERCENTUAL;
console.log("O salário ajustado é", salario);