var carta1 = 6;
var carta2 = 4;
var carta3 = 8;
var carta4 = 8;
var cartasoma = carta1 + carta2 + carta3 + carta4;
console.log("A soma é", cartasoma);
if (cartasoma > 21) {
  console.log("Você perdeu! A soma das cartas é maior que 21.");
} else {
  console.log("Você ganhou! A soma das cartas é menor ou igual a 21.");
}
console.log("Pontuação do jogador: " + cartasoma);
