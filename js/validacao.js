function verificaSeOChutePossuiUmValorValido(chute) {
  const numero = +chute;

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += '<div>Valor inválido</div>';
    return;
  }

  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
    return;
  }

  if (valorExato(numero)) {
    document.body.innerHTML = `
      <h2>Você acertou!</h2>
      <h3>O número secreto era ${numeroSecreto}</h3>

      <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
  } else if (valorMaior(numero)) {
    elementoChute.innerHTML += `<div>O numero secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>`
  } else {
    elementoChute.innerHTML += `<div>O numero secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>`

  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

function valorExato(numero) {
  return numero === numeroSecreto;
}

function valorMaior(numero) {
  return numero > numeroSecreto;
}

document.body.addEventListener('click', e => {
  if (e.target.id == 'jogar-novamente') {
    window.location.reload();
  }
})