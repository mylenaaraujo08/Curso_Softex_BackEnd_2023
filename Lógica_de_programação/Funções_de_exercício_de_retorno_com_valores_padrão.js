function saudacao(nome = "usuário") {
  console.log(`Olá, ${nome}!`);
}
saudacao();      
saudacao("Mylena"); 

function calculadora(num1, num2, operacao = "+") {
  let resultado;
  switch (operacao) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
    default:
      console.log("Operação inválida.");
      return;
  }
  console.log(`Resultado: ${resultado}`);
}
calculadora(6, 2);   

function contagemRegressiva(inicio = 10) {
  for (let i = inicio; i >= 1; i--) {
    console.log(i);
  }
}
contagemRegressiva(); 
