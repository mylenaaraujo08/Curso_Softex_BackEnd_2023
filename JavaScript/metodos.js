function soma(numero1, numero2) {
  try {
    if (isNaN(numero1) || isNaN(numero2)) {
      throw new Error("Você deve inserir números válidos.");
    }

    let resultado = numero1 + numero2;
    console.log(`O resultado da soma é: ${resultado}`);
  } catch (erro) {
    console.error(erro.message);
  } finally {
    console.log("Fim da execução.");
  }
}

const [numero1, numero2] = process.argv.slice(2);
soma(parseFloat(numero1), parseFloat(numero2));
