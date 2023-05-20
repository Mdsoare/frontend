/*
Autor: Marcelo Soares
Data: 2023-05-20
Exercício 06: Escreva um código que efetue o cálculo da quantidade de litros de combustível gastos em uma viagem, sabendo-se que o carro faz 12 km com um litro. Deverão ser fornecidos o tempo gasto na viagem e a velocidade média.
*/

const CONSUMO_MEDIO = 12;
let tempo = 3;
let velocidadeMedia = 80;
let distancia = 0;
let litrosUsados = 0;

distancia = (tempo * velocidadeMedia);
litrosUsados = distancia / CONSUMO_MEDIO;

console.log("Para a velocidade média de " + velocidadeMedia + " km/h\ncom o tempo gasto de " + tempo + " horas \ne uma distancia de " + distancia + " Km\nforam gastos " + litrosUsados + " litros de combustível");

