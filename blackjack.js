var cartas;
var carta1 = 10;
var carta2 = 8;
var somacartas = carta1 + carta2;
console.log("A soma das duas cartas é: " + somacartas);
if (somacartas > 21) {
  console.log("Você perdeu! A soma das cartas é maior que 21.");
} else {
  console.log("Você ganhou! A soma das cartas é menor ou igual a 21.");
}
console.log("Pontuação do jogador: " + somacartas);
