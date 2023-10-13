async function obterNumeroDoUsuario() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    readline.question('Digite um número: ', (numero) => {
      resolve(parseFloat(numero));
      readline.close();
    });
  });
}
function somar(a, b) {
  return a + b;
}
const multiplicar = (a, b) => a * b;

async function main() {
  let numero1 = await obterNumeroDoUsuario();
  let numero2 = await obterNumeroDoUsuario();

  let resultadoSoma = somar(numero1, numero2);
  let resultadoMultiplicacao = multiplicar(numero1, numero2);

  console.log(`O resultado da soma ${numero1} + ${numero2} é: ${resultadoSoma}`);
  console.log(`O resultado da multiplicação ${numero1} x ${numero2} é: ${resultadoMultiplicacao}`);
}
main();
