/*
Autor: Marcelo Soares
Data: 2023-05-19
Exercício 06: Escreva um código que possa receber um valor de um produto e retorne o novo valor com desconto de 9% a vista.
*/

const DESCONTO = 0.09;
let produto = 1000;
let novoValorProduto = 0;

novoValorProduto = produto - (produto * DESCONTO);
console.log("O valor do produto à vista, com desconto é R$", novoValorProduto);