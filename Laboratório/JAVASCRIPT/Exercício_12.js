/*
Autor: Marcelo Soares
Data: 2023-07-20
Exercício 12: Trabalhando com Herança
*/
// Definindo a classe-pai (ou "classe-mãe" ou "Superclasse")
class Dispositivo {
	constructor(nome){
		this._nome = nome;
		this._ligado = false;
	}

	ligar(){
		if(this._ligado){
			console.log("O Dispositivo já está ligado!");
			return;
		}
		this._ligado = true;
	}
}

// Definindo a classe filha (ou "Subclasse" com a plalavra "extends + a Superclasse")
class Smartphone extends Dispositivo{
	constructor(nome, cor, modelo){
		super(nome);
		this._cor = cor;
		this.modelo = modelo;
	}
}

// Construindo um objeto (ou instância) da classe Smartphome

const S1 = new Smartphone("Samsung", "Preto", "Galaxy A71");
console.log(S1);
S1.ligar();
S1.ligar();