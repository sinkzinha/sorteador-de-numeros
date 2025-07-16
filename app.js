function sortear() {
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let numeroInicial = parseInt(document.getElementById('de').value);
    let numeroLimite = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero; 

    let intervalo = numeroLimite - numeroInicial + 1;
    if (quantidadeDeNumeros < intervalo ) {
        alert('Erro: a quantidade de números solicitada é maior do que o intervalo disponível.');
        return;
    }

    for (let i = 0; i < quantidadeDeNumeros; i++) {
        numero = gerarNumeroAleatorio(numeroInicial, numeroLimite);

       while (sorteados.includes(numero)){
        numero = gerarNumeroAleatorio(numeroInicial, numeroLimite);

       }

       sorteados.push(numero);
    }

       console.log(sorteados);

    let palavraNumero = quantidadeDeNumeros > 1 ? 'Numeros Sorteados' : 'Numero Sorteado';
    exibirTexto(palavraNumero + ' ' + sorteados);
    botaoReiniciar();
    }


function gerarNumeroAleatorio(min, max) {
    return parseInt(Math.random() * (max - min + 1)) + min;
}

function exibirTexto(texto) {
    let campo = document.getElementById('resultado')
    campo.innerHTML = texto;
}


function botaoReiniciar() {
    let botao = document.getElementById('btn-reiniciar')
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = ' ';
    document.getElementById('de').value = ' ';
    document.getElementById('ate').value = ' ';
    document.getElementById('resultado').innerHTML = 'Números sorteados:  nenhum até agora';
    botaoReiniciar();
}
