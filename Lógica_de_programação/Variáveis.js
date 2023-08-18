let minhavar = 10;
let soma = 15 + 8;
soma += 1;
soma *= 3;
console.log("a soma é", soma);

let fazsol = true;
let comida = ["arroz", "feijão", "ovo"];
console.log(comida[1]);

if (minhavar <= soma) {
  if (soma === minhavar) {
    console.log("As variáveis são iguais, incluindo o tipo.");
  } else {
    console.log("As variáveis são diferentes ou têm tipos diferentes.");
  }
  console.log("minhavar é menor ou igual a soma.");
} else {
  console.log("minhavar é maior que soma.");
}

function divisao(numero1, numero2) {
  if (numero2 === 0) {
    return "Não é possível dividir por zero.";
  }
  
  return numero1 / numero2;
}
console.log(divisao(10, 2));
