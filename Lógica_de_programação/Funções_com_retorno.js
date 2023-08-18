function somar (num1, num2) {
  return num1 + num2;
}
  const resultado = somar(4,5);
  console.log(resultado);

function ehPar (numero) {
 return numero % 2 === 0;
}
  console.log (ehPar(9));

function maiorNumero (num1, num2, num3) {
  return Math.max (num1, num2, num3);
}
console.log(maiorNumero(15,42,34));

function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}
console.log(calculaIMC(50, 1.55)); 
