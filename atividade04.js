function verificarDiaDaSemana(numero) {
  let diaDaSemana;
  switch (numero) {
    case 1:
      diaDaSemana = "Domingo";
      break;
    case 2:
      diaDaSemana = "Segunda-feira";
      break;
    case 3:
      diaDaSemana = "Terça-feira";
      break;
    case 4:
      diaDaSemana = "Quarta-feira";
      break;
    case 5:
      diaDaSemana = "Quinta-feira";
      break;
    case 6:
      diaDaSemana = "Sexta-feira";
      break;
    case 7:
      diaDaSemana = "Sábado";
      break;
    default:
      diaDaSemana = "Número inválido. Insira um número de 1 a 7.";
      break;
  }
  return diaDaSemana;
}
console.log(verificarDiaDaSemana(5)); 

function converterNumeroParaNomeDoMes(numero) {
  let nomeDoMes;
  switch (numero) {
    case 1:
      nomeDoMes = "Janeiro";
      break;
    case 2:
      nomeDoMes = "Agosto";
      break;
    case 3:
      nomeDoMes = "Novembro";
      break;
    case 4:
      nomeDoMes = "Dezembro";
      break;
    default:
      nomeDoMes = "Mês inválido. Insira um número de 1 a 12.";
      break;
  }
  return nomeDoMes;
}
console.log(converterNumeroParaNomeDoMes(2)); 

function exibirMensagemEstadoCivil(estadoCivil) {
  let mensagem;
  switch (estadoCivil.toLowerCase()) {
    case "solteiro":
      mensagem = "Você é solteiro(a). Aproveite sua liberdade!";
      break;
    case "casado":
      mensagem = "Você é casado(a). Desejamos muitas felicidades!";
      break;
    case "divorciado":
      mensagem = "Você é divorciado(a). Que você encontre a felicidade!";
      break;
    case "outro":
      mensagem = "Seu estado civil é outro. Respeitamos sua privacidade!";
      break;
    default:
      mensagem = "Estado civil não reconhecido. Por favor, insira solteiro, casado, divorciado ou outro.";
      break;
  }
  return mensagem;
}
console.log(exibirMensagemEstadoCivil("solteiro"));

function exibirMensagemTipoAnimal(tipoAnimal) {
  let mensagem;
  switch (tipoAnimal.toLowerCase()) {
    case "cachorro":
      mensagem = "Você tem um cachorro! Eles são lindos e ótimos companheiros.";
      break;
    case "gato":
      mensagem = "Você tem um gato! Eles são independentes e amorosos.";
      break;
    case "passaro":
      mensagem = "Você tem um pássaro! Eles são tão pequenos e espontaneos.";
      break;
    case "outro":
      mensagem = "Você tem um animal de outro tipo. Cada animal é especial à sua maneira!";
      break;
    default:
      mensagem = "Tipo de animal não reconhecido. Por favor, insira cachorro, gato, passaro ou outro.";
      break;
  }
  return mensagem;
}
console.log(exibirMensagemTipoAnimal("cachorro"));

function calcularOperacaoMatematica(numero1, numero2, operador) {
  let resultado;
  switch (operador) {
    case "+":
      resultado = numero1 + numero2;
      break;
    case "-":
      resultado = numero1 - numero2;
      break;
    case "*":
      resultado = numero1 * numero2;
      break;
    case "/":
      resultado = numero1 / numero2;
      break;
    default:
      resultado = "Operador não reconhecido. Insira um operador válido: +, -, *, ou /";
      break;
  }
  return resultado;
}
console.log(calcularOperacaoMatematica(8, 3, "*")); 