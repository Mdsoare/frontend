/*
Autor: Marcelo Soares
Data: 2023-07-05
Exercício 12: Trabalhando com carrinho de compras
*/

// Definindo as variáveis globais:
var valorTotal = [0,0]; // Valor total dos produtos 1 e 2
var valorProduto = [50.00,30.00]; // valor de cada produto 
var qtd = [0,0]; // quantidade selecionada

// Definindo funções:

function adicionarItem(item) {
	 var quantidade = document.getElementById('quantidade' + item);
	 var total = document.getElementById('total' + item);

	 qtd[item] += 1;
	 valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
	 quantidade.innerHTML = qtd[item];
	 total.innerHTML = valorTotal[item].toFixed(2);
	 valorCompra();
}

function removerItem(item) {
	if (qtd[item] > 0){
		var quantidade = document.getElementById('quantidade' + item);
		var total = document.getElementById('total' + item);
	 	qtd[item] -= 1;
	 	valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
	 	quantidade.innerHTML = qtd[item];
	 	total.innerHTML = valorTotal[item].toFixed(2);
	 	valorCompra();
	}
}

function valorCompra(){
	var valorTotalCompra = document.getElementById('valorTotalCompra');
	var valor = 0;

	for (var i = 0; i < valorTotal.length; i++){
		valor += valorTotal[i];
	}

	valorTotalCompra.innerHTML = valor.toFixed(2);
}