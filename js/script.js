function capturarValores() {
    let nome = document.getElementById('campoNome').value;
    let idade = document.getElementById('campoIdade').value;
    let frase = document.getElementById('mostraNome');

    frase.textContent = `Seu nome é ${nome} e sua idade é ${idade}.`;
}