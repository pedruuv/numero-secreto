const elementoMenorValor = document.querySelector("#min");
const elementoMaiorValor = document.querySelector("#max");
const valorMin = 0;
const valorMax = 1000;
const numSecreto = gerarNumeroAleatorio();

elementoMenorValor.innerHTML = valorMin;
elementoMaiorValor.innerHTML = valorMax;

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * valorMax + 1);
}
