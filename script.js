// Capturando os elementos HTML
var titulo = document.getElementById('titulo');
var listaNaoOrdenada = document.querySelector('ul');
var link = document.getElementById('link');
var listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando conteúdo aos elementos
titulo.innerText = 'Título do Projeto';
link.innerText = 'Meu link';

// Adicionando itens na lista não ordenada
listaNaoOrdenada.innerHTML += '<li>Item 1</li>';
listaNaoOrdenada.innerHTML += '<li>Item 2</li>';
listaNaoOrdenada.innerHTML += '<li>Item 3</li>';

// Adicionando itens na lista ordenada
listaOrdenada.innerHTML += '<li><a href="https://prozeducacao.com.br">Site 1</a></li>';
listaOrdenada.innerHTML += '<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Site 2</a></li>';
listaOrdenada.innerHTML += '<li><a href="https://git-scm.com/">Site 3</a></li>';