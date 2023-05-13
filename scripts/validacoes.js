function verificaChuteValido(chute) {
  const numero = +chute;

  if (chuteForInvalido(numero)) {
    if(chute.toUpperCase() === 'GAME OVER'){
        document.body.innerHTML = `
        <h2>Game Over!!!</h2>
        <h3>Pressione o botão para jogar novamente</h3>
        <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
        `
        document.body.style.backgroundColor = "red";
    } else{
        elementoChute.innerHTML += `<div>Valor inválido</div>`;
        return;    
    }
  }
  if (numeroForMaiorOuMenorPermitido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${valorMin} e ${valorMax}</div>`;
    return;
  }

  if (numero === numSecreto) {
    document.body.innerHTML = `<h2>Você acertou!</h2>
    <h3>O número secreto era ${numSecreto}</h3>
    <button id="btn" class="btn-jogar">Jogar Novamente</button>
    `;
  } else if (numero > numSecreto) {
    elementoChute.innerHTML += `<div>O número Secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>`;
  } else{
    elementoChute.innerHTML += `<div>O número Secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>`;
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorPermitido(numero) {
  return numero > valorMax || numero < valorMin;
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'btn'){
        location.reload();
    }
});
