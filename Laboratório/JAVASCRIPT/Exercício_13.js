/*
Autor: Marcelo Soares
Data: 2023-07-02
Exercício 13: DOM (Document Object Model)
*/
//
// Quando uma página HTML é carregada, o navegador cria um DOM da página cujo pai é "#document"
// O modelo HTML DOM é construido como uma árvore de objetos.
//
// Com o modelo de objeto, JavaScript tem todo o poder necessário para criar HMTL dinamicamente:
// O JavaScript pode:
// > alterar todos os elementos HTML na página
// > alterar todos os atributos dos elementos HTML na página
// > alterar todos os estilos CSS
// > remover um elemento HTML e seus atributos
// > adicionar um elemento HTML e seus atributos
// > reagir a todos os eventod que ocorrem em uma página
// > pode criar novos eventos na página
//
// Elemento da árvore do DOM. Exemplos:
//
// window
// window.alert() - cria uma janela de alerta com o botão "ok"
// window.confirm() - cria uma janela com as opções "ok" e "cancel"
// window.prompt() - cria uma janela para imput de dados com o botão "ok"
//
// Encontrando elementos
//
// > Através da tag
// document.getElementsByTagName()
// 
// Método retorna uma coleção de todos os elementos com um nome da tag especificado
//
// Exemplo:
// 
// var variasLi = document.getElementsByTagName("li");
//
// Para pegar a primeira li
// var primeiraLi = document.getElementsByTagName("li")[0];
//
// Depois que temos o elemento podemos fazer qualquer coisa com ele. Por exemplo,
// trocar o valor dele ou trocar a cor dele.
//
// > Através da ID
// document.getElementById()
//
// > Através da ID
// document.getElementsByName()