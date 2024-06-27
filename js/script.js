function capturarValores() {
    let nome = document.getElementById('campoNome').value;
    let idade = document.getElementById('campoIdade').value;
    let frase = document.getElementById('mostraNome');

    frase.textContent = `Seu nome é ${nome} e sua idade é ${idade}.`;
}

let sentencas = 'Meu nome é Deborah; eu adoro resolver desafios em javascript.';
console.log(sentencas.split(';'));

let numeros = '1,2,3,4,5,6';
let listaNumeros = numeros.split(',');
console.log(listaNumeros);