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
// Caso deseje colocar o resultado em outro Array:
// let novoArray = numeros.slice(0,5);
//
// Outra forma do uso do splice:
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

// Usando o concat
let palavra1 = "Dr. ";
let palavra2 = "João";
let juntarPalavras = palavra1.concat(palavra2);
console.log(juntarPalavras);

// O método filter recebe cada elemento do Array e aplica uma instrução condicional
// Se a condição for verdadeira, o elemento é colocado no Array de resultado
// Se for falsa, não insere no Array
// uso: array.filter(elemento, indice, array)

// Exemplo a partir de um Array gerar outro com elementos par:
const numeros3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultado3 = numeros3.filter(item => item % 2 == 0); 
// => funciona como "foreach para cada um" e depois do => funciona como um return item % 2 == 0
console.log(resultado3);

// Outra forma de uar o  filter, com uma funçao externa
function numerosPares (a) { 
    if (a % 2 == 0)
    return a;
}

let arrayNumerosPares = numeros3.filter(numerosPares);
console.log(arrayNumerosPares); // Cuidado pq a função não retornou o "zero"! 

// Outra forma de uar o  filter, com uma funçao "interna"
let arrayNumerosImpares = numeros3.filter(
    function(b){
        if (b % 2 != 0)
        return b;
    }
);
console.log(arrayNumerosImpares);

// Exemplo a partir de um Array gerar outro com elementos negativos:
const numeros4 = [0, - 1, 2, 3, - 4, 5, 6, 7, 8, - 9];
const resultado4 = numeros4.filter(item => item < 0);
console.log(resultado4);

var funcionarios = [
    {nome: "Luiz", idade: 59},
    {nome: "Jó", idade: 37},
    {nome: "Maria", idade: 41},
    {nome: "Ana", idade: 21}
]

let filtroFuncionarios = funcionarios.filter(i => i.nome.length < 3);
// retorna o(s) funcionário(s) com tamanho de nome menor do que 3, no caso Jó
console.log(filtroFuncionarios);

var filtroFuncionarios2 = funcionarios.filter(a => a.nome);
// Retorna todo Array
console.log(filtroFuncionarios2);

// Usando map para iterar um Array

var numeros5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var num = numeros5.map(a => a * 3);
console.log(numeros5.join(" "));
console.log(num.join(' '));

var pessoas = funcionarios.map(pessoa => pessoa.nome);
console.log(pessoas.join(' - '));

var pessoas2 = funcionarios.map(pessoa => pessoa.idade);
console.log(pessoas2.join(' - '));

// Usando o reduce()
// reduz um Array de valores a um único valor. Para obter o valor de resultado,
// ele executa uma função de redução em cada elemento do array

// Somando elementos de um Array
var numeros6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = numeros6.reduce(function(total,numero){
    return total + numero;
}, 0); // inicia a variavel total = 0
console.log("A soma total dos elementos do Array é: " + total);


// Gerando a meia de um Array com dois métudops: reduce e length:
let resultadoMedia = (numeros6.reduce(function(a, b) {return a + b})) / numeros.length;
console.log("A média do Array é: " + resultadoMedia);