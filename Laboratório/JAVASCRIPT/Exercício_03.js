/*
Autor: Marcelo Soares
Data: 2023-05-19
Exercício 03: O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escreva um código para ler o custo de fábrica de um carro, calcule e escreva o custo final ao consumidor
*/

let custoFabrica = 40000;
const PORCENTAGEM_DISTRIBUIDOR = 0.28;
const IMPOSTOS = 0.45;
let custoConsumidor = 0;

custoConsumidor = custoFabrica + (custoFabrica * PORCENTAGEM_DISTRIBUIDOR) + (custoFabrica * IMPOSTOS);

console.log("O  custo final do carro novo é", custoConsumidor);