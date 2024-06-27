let valorTotal = document.getElementById('valor-total');
let listaProdutos = document.getElementById('lista-produtos');
let quantidadeProduto = document.getElementById('quantidade');

valorTotal.textContent = `R$0`;
listaProdutos.textContent = '';

function adicionar() {
    let produto = document.getElementById('produto').value;

    let valorProduto = produto.split('R$') [1];
    let nomeProduto = produto.split('-') [0];

    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeProduto.value}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
        </section>`;
    valorTotal.textContent = `R$${parseInt(valorTotal.textContent.split('$')[1]) + (valorProduto * quantidadeProduto.value)}`;
}

function limpar() {
    valorTotal.textContent = `R$0`;
    listaProdutos.textContent = '';
    quantidadeProduto.value = '';
}