const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio(menorValor, maiorValor);

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('numero secreto: ' + numeroSecreto)

const elementoMenorValor = document.querySelector('#menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.querySelector('#maior-valor');
elementoMaiorValor.innerHTML = maiorValor;