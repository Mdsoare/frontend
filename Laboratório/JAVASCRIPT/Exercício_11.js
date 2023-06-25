/*
Autor: Marcelo Soares
Data: 2023-06-25
Exercício 11: Trabalhando com Classes
*/
// Classes:
// Quando se fala em Javascript, na sua definição informa que ela é orientada a objeto.
// Mas, o princípio da orientação a objetos envolve o uso de classes.
// Contudo, Javascript não tinha muito bem uma classe, era usado prototype para dizer que se fazia uso de classe.
// Sendo assim, a partir do ECMAScript 2015n(ES6), as classes começaram a fazer parte da linguagem.
// Isso não mudou ou adicionou funcionalidades, mas trouxe uma melhor organização para o código,
// além de entrar no padrão de outras tecnologias.
//
// Exemplo de uso:
//
//Cronstruindo a classe "User"
class User{
	constructor(primeiroNome, sobrenome){
		this.primeiroNome = primeiroNome;
		this.sobrenome = sobrenome;
	}

	getNomeCompleto(){
		console.log(this.primeiroNome + " " + this.sobrenome);
	}

}

// Criando objeto (uma instância de uma classe)

const user1 = new User("Caio", "de Lima Granero");
user1.getNomeCompleto();

// Outro conceito importante é sobre getters e setters:
// São usados para proteger seus dados, especialmente na criação de classes.
// Para cada instância de variável, um método getter retorna seu valor,
// enquanto um método setter o define ou atualiza.
// Com isso em mente, getters e setters também são conhecidos como 
// métodos de acesso e de modificação, respectivamente.
// Por convenção, getters começam com a palavra "get" e setters com a palavra "set",
// seguidos de um nome de variável.