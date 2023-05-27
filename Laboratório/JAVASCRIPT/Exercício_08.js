/*
Autor: Marcelo Soares
Data: 2023-05-27
Exercício 07: Trabalhando com Arrays
*/

//Formas de criação de Array
//
// let numeros = [item0, item1, ..., itemN]:
//
// Outras formas:
// let numeros = new Array(item0, item1, ..., itemN);
//
// let numeros = Array(item0, item1, ..., itemN);
//
// Particularidades:
// Para criar um Array de tamanho definido:
// var arr = new Array(comprimentoDoArray); // let arr = new Array(42);
// var arr = Array(comprimentoDoArray); // let arr = Array(42);
// var arr = [];  // OBS: Se usar "let arr = [42];" Cria um Array com o elemento 42
// arr.length = comprimentoDoArray; // Tem o mesmo valor das duas  formas acima

// Gerando a meia de um Array com dois métudops: reduce e length:

let numeros = [1, 5, 7, 9, 4, 2, 8];
let resultadoMedia = (numeros.reduce(function(a, b) {return a + b;})) / numeros.length;
console.log("A média do Array é: " + resultadoMedia);