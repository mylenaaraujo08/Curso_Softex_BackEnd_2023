let numero = 1;
while (numero <= 10) {
  console.log(numero);
  numero++;
}

let soma = 0;
for (let numero = 1; numero <= 100; numero++) {
  soma += numero;
}
console.log("A soma dos números de 1 a 100 é: " + soma);

let quantidadePares = 0;
for (let numero = 1; numero <= 50; numero++) {
  if (numero % 2 === 0) {
    quantidadePares++;
  }
}
console.log("A quantidade de números pares de 1 a 50 é: " + quantidadePares);

let x = 1;
while (x <= 1000) {
  x *= 2;
}
console.log("O primeiro número multiplicado por 2 que é maior que 1000 é: " + x);

let ehPrimo = true;
let i = 2;
let n = 6;
while (i <= n) {
  if (n % i == 0) {
    console.log(n + " não é primo");
    ehPrimo = false;
    break;
  }
  i++;
}
if (ehPrimo) {
  console.log(n + " é primo");
}

const senhaCorreta = "senha 2304";
let senhaDigitada = prompt("Digite a senha: " + senhaCorreta);
while (senhaDigitada !== senhaCorreta) {
  senhaDigitada = prompt("Senha incorreta. Digite novamente: ");
}
console.log("Senha correta! Acesso permitido." + senhaCorreta);

function calcularMedia(listaDeNumeros) {
  if (listaDeNumeros.length === 0) {
    return 0; 
  }
  let soma = 0;
  for (let numero of listaDeNumeros) {
    soma += numero;
  }
  return soma / listaDeNumeros.length;
}

const lista = [5, 10, 15, 20, 25];
const media = calcularMedia(lista);
console.log("A média da lista é: " + media);

let numeroFatorial = 20;
let fatorial = 1;
let contadorFatorial = 1;
while (contadorFatorial <= numeroFatorial) {
  fatorial *= contadorFatorial;
  contadorFatorial++;
}
console.log("O fatorial de " + numeroFatorial + " é: " + fatorial);

let numero2 = 10;
while (numero2 >= 1) {
  console.log(numero2);
  numero2--;
}

