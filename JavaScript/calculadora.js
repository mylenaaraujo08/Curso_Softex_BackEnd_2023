function calcular(valor1, valor2, operador) {
    let resultado;

    switch (operador) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            resultado = Math.floor(valor1 / valor2);
            let sobra = valor1 % valor2; 
            return `Resultado: ${resultado}, Sobrou: ${sobra}`;
        default:
            return 'Operador inválido';
    }
    return `Resultado: ${resultado}`;
}
let valor1 = 10;
let valor2 = 3;
let operador = '/';

let resultado = calcular(valor1, valor2, operador);
console.log(resultado);
