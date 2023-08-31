const nomeAluno = "Paulo";

let nota1 = 7;
let nota2 = 8;
let nota3 = 6;

let media = (nota1 + nota2 + nota3) / 3;
console.log("Nome do aluno: " + nomeAluno);
console.log("Média: " + media.toFixed(2));

const ano = parseInt(prompt("Digite um ano para verificar se é bissexto:"));
if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  console.log(ano + " é um ano bissexto.");
} else {
  console.log(ano + " não é um ano bissexto.");
}

const estadosValidos = {
  MG: 0.07,
  SP: 0.12,
  RJ: 0.15,
  MS: 0.08
};

const valorProduto = parseFloat(prompt("Digite o valor do produto:"));
const estadoDestino = prompt("Digite a sigla do estado destino (MG, SP, RJ, MS):").toUpperCase();

if (estadosValidos.hasOwnProperty(estadoDestino)) {
  const taxaImposto = estadosValidos[estadoDestino];
  const precoFinal = valorProduto * (1 + taxaImposto);
  
  console.log(`Valor do produto: R$ ${valorProduto.toFixed(2)}`);
  console.log(`Estado destino: ${estadoDestino}`);
  console.log(`Taxa de imposto: ${(taxaImposto * 100).toFixed(2)}%`);
  console.log(`Preço final do produto: R$ ${precoFinal.toFixed(2)}`);
} else {
  console.log("Erro: Estado destino inválido.");
}

let somaFor = 0;
for (let i = 2; i <= 100; i += 2) {
  somaFor += i;
}
console.log("A soma dos 50 primeiros números pares (usando for) é: " + somaFor);

let somaWhile = 0;
let num = 2;
let contador = 0;

while (contador < 50) {
  somaWhile += num;
  num += 2;
  contador++;
}
console.log("A soma dos 50 primeiros números pares (usando while) é: " + somaWhile);

let somaDowhile = 0;
let numDoWhile = 2;
let contadorDoWhile = 0;
do {
  somaDowhile += numDoWhile;
  numDoWhile += 2;
  contadorDoWhile++;
} while (contadorDoWhile < 50);
console.log("A soma dos 50 primeiros números pares (usando Dowhile) é: " + somaDowhile);

const N = parseFloat(prompt("Digite um número N:"));
const count = 0;
var num = 1;

While (count < N) {
if (num % 2 !==0) {
  console.log(num);
  count++;
}
  num++
}