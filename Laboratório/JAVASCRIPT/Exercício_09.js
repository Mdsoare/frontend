/*
Autor: Marcelo Soares
Data: 2023-06-07
Exercício 09: Trabalhando com funções
*/
//
// Criando um função sem parâmetros
function mensagem(){
    console.log("Olá mundo!");
}
// Chamado a função:
mensagem();

//Criando uma função com parâmetros:
function calculaSoma(a, b){
    return a + b;
}
let resultado = calculaSoma(3,5);
console.log('O resultado da soma é: '+resultado);

//Criando funções com valores default
function valorDefault(a, b=5){
    return a * b;
}
resultado = valorDefault(3); // Aproveitando o segundo parâmetro default "5"
console.log('O resultado da multiplicação é: ' + resultado);
resultado = valorDefault(9,4); // Substituindo o valor default 5 por 4
console.log('Agora o resultado da multiplicação é: ' + resultado);

//Criando funções com parâmetros variádos 
function teste(...args){
    console.log(args);
}
teste(1,2,3);
teste("a");
teste("Maria", "José");

// Outra forma de criar uma função
// uma variável que recebe uma função anônima:
var calcula = function(numero){ return numero * 2};
var x = calcula(9);
console.log(x);