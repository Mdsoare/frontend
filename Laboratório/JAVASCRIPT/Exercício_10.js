/*
Autor: Marcelo Soares
Data: 2023-06-07
Exercício 09: Trabalhando com Objetos
*/
// Criando um objeto (formato JSON):
var pessoas = {
    nome: "Felipe",
    sobrenome: "Oliveira"
};
const chave = pessoas.sobrenome;
console.log(pessoas['nome']);
console.log(chave);
//
//
//
// Outro forma de criar um objeto:
var pessoa1 = new Object();
pessoa1.nome = 'Angela';
pessoa1.sobrenome = 'Silva';
//Criando uma função para o objeto:
pessoa1.falarNome = function(){
    console.log("Nome é " + this.nome);
}
//Chamado a função "anônima":
pessoa1.falarNome();
//
//
//
// Mais uma forma de criar um objeto:
function criarPessoa(nome, sobrenome){
    return {nome, sobrenome};
}
var pessoa2 = criarPessoa("Lucas", "Silva");
var pessoa3 = criarPessoa("Arthur", "Almeida");
console.log(pessoa2);
console.log(pessoa3);