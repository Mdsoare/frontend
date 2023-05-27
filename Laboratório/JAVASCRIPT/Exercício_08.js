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

// Alguns exempos de uso:

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Array Original: " + numeros);

// Para retornar o tamanho do Array:
console.log("O tamanho do Array é: "  + numeros.length);

// Adicionando elementos no Array com unshift (início) e push (final)
numeros.unshift(0); 
numeros.push(10); 
console.log("Array incrementado: " + numeros);

// Retornando o intervalo de um Array
console.log("O Intervalo de 0 a 5: " + numeros.slice(0,5)); // Da posição inicial(0) até a posição 5
console.log("O Intervalo da posição 5 até o final é: " + numeros.slice(5,)); 

// Invertendo a ordem dos elementos do Array
numeros.reverse();
console.log("Array invertido: " + numeros);

// Para retornar o primeiro elemento e o remove da lista:
console.log("Primeiro elemento removido: "  + numeros.shift());
console.log("Array alterado: "  + numeros);

// Para remover o último elemento de um Array
console.log("Último elemento removido: "  + numeros.pop());
console.log("Array alterado: "  + numeros);

// Gerando a meia de um Array com dois métudops: reduce e length:
let resultadoMedia = (numeros.reduce(function(a, b) {return a + b;})) / numeros.length;
console.log("A média do Array é: " + resultadoMedia);

// Trabalhando a saída com join

console.log(numeros.join(" * "));
console.log(numeros.join(' '));

//Outros exemplos:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join());  // Default é com ","
console.log(fruits.join(";")); 
console.log(fruits.join("|")); 
console.log(fruits); 

// Retornando o valor de uma determinada posição
console.log("O valor da posição 03 é: " + numeros.indexOf(3));
console.log(numeros.join(' '));

//Removendo elementos a partir de um índice com splice
console.log(fruits.join(' - ')); 
fruits.splice(2, 1); // Removeu o elemento da posição 2 apenas
console.log(fruits.join(' - ')); 
fruits.splice(0, 2); // Removeu os elementos a partir da posição 0 até a 2
console.log(fruits.join(' - ')); 
fruits.splice(0);
console.log(fruits); 
// Populando o Array...
fruits[0] = "Banana";
fruits[1] = "Orange";
fruits[2] = "Apple";
fruits[3] = "Mango";
console.log(fruits.join(' - ')); 
fruits.splice(1); // Remove todos os elementos a partir da posição 1
console.log(fruits); 