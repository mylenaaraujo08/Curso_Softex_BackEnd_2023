var nota1 = parseFloat(prompt("Digite a primeira nota (de 1 a 10):"));
var nota2 = parseFloat(prompt("Digite a segunda nota (de 1 a 10):"));
var nota3 = parseFloat(prompt("Digite a terceira nota (de 1 a 10):"));

if (nota1 >= 1 && nota1 <= 10 && nota2 >= 1 && nota2 <= 10 && nota3 >= 1 && nota3 <= 10) {
    var media = (nota1 + nota2 + nota3) / 3;

    console.log("A média das notas é: " + media.toFixed(2)); //toFixed(2) para exibir até duas casas decimais
} else {
    console.log("Por favor, insira notas entre 1 e 10.");
}
