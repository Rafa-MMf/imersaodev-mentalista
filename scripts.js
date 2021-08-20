var numeroSecreto = Math.round(Math.random() * 10)
var tentativas = 3

function calcular() {
    while (tentativas > 0) {
    var chute = parseInt(prompt("Digite seu chute de um número entre 0 e 10"))

    if(numeroSecreto == chute) {
     alert("Você acertou, o número pensado era " + numeroSecreto)
     break
    } else if (chute > numeroSecreto) {
      alert("O número secreto é menor")
      tentativas = tentativas - 1
    } else if (chute < numeroSecreto) {
      alert("O número secreto é maior")
      tentativas = tentativas - 1
    }
  } if (chute != numeroSecreto) {
  alert("Suas tentativas acabaram.. O número secreto era " + numeroSecreto)
  }
}
