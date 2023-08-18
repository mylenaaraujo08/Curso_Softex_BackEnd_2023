function saudacao () {
  console.log ("ola mundo!");
}
saudacao();
function dobro(num) {
  var resultado = num * 2;
  console.log(`O dobro de ${num} é ${resultado}.`);
}
dobro(18);
function mostrarNumeros (inicio, fim) {
  for (let i = inicio; i <= fim; i++) {
       console.log(i);
}
}
mostrarNumeros(1,10);
 function verificarPar (numero) {
if (numero % 2 === 0) {
  console.log (`${numero} é um numero par.`);
} else {
  console.log (`${numero} não é um numero par.`);
}
}
verificarPar(16);
function imprimirLista (array) {
  for ( let i = 0; i < array.length; i++) {
    console.log (array[i]);
  }
}
const minhaLista = [ 5, 10, 15, 20, 25, 30];
imprimirLista (minhaLista);
