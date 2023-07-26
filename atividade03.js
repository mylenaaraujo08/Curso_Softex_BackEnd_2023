function podeDirigir(idade, temAutorizacaoPais) {
    if (idade >= 18) {
      return "Você tem 18 anos ou mais, pode dirigir sem a autorização dos pais.";
    } else if (idade >= 16 && temAutorizacaoPais) {
      return "Você tem entre 16 e 17 anos e possui autorização dos pais, pode dirigir.";
    } else {
      return "Você não pode dirigir ainda.";
    }
  }
  // Exemplos de uso:
  const idade1 = 15;
  const temAutorizacaoPais1 = false;
  console.log(podeDirigir(idade1, temAutorizacaoPais1)); 
  const idade2 = 16;
  const temAutorizacaoPais2 = true;
  console.log(podeDirigir(idade2, temAutorizacaoPais2)); 
  const idade3 = 18;
  const temAutorizacaoPais3 = false;
  console.log(podeDirigir(idade3, temAutorizacaoPais3));