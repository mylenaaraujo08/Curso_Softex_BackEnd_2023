function classificarNumero(numero) {
  if (numero < 0) {
    return "Negativo";
  } else if (numero === 0) {
    return "Zero";
  } else {
    return "Positivo";
  }
}
console.log(classificarNumero(-5)); 
console.log(classificarNumero(0));  
console.log(classificarNumero(10));

function verificarDivisibilidade(numero) {
  if (numero % 2 === 0) {
    return "Divisível por 2";
  } else if (numero % 3 === 0) {
    return "Divisível por 3";
  } else if (numero % 5 === 0) {
    return "Divisível por 5";
  } else {
    return "Não é divisível por 2, 3 ou 5";
  }
}
console.log(verificarDivisibilidade(15));  

function classificarVariavel(valor) {
  if (typeof valor === 'boolean') {
    return 'Booleano';
  } else if (typeof valor === 'number') {
    return 'Numérica';
  } else if (typeof valor === 'string') {
    return 'String';
  } else if (typeof valor === 'undefined') {
    return 'Indefinida';
  } else {
    return 'Tipo não reconhecido';
  }
}
console.log(classificarVariavel(true));            

function classificarNumero(numero) {
  if (numero < 0) {
    return "Negativo";
  } else if (numero === 0) {
    return "Zero";
  } else if (numero > 0) {
    return "Positivo";
  }
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}
console.log(classificarNumero(10));

function verificarDivisibilidade(numero) {
  if (numero % 2 === 0) {
    return "Divisível por 2";
  } else if (numero % 3 === 0) {
    return "Divisível por 3";
  } else if (numero % 5 === 0) {
    return "Divisível por 5";
  } else if (numero % 7 === 0) {
    return "Divisível por 7";
  } else {
    return "Não é divisível por 2, 3, 5 ou 7";
  }
}
console.log(verificarDivisibilidade(15));
