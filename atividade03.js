function podeDirigir(idade, temAutorizacaoPais) {
    if (idade >= 18) {
      return "Você tem 18 anos ou mais, pode dirigir sem a autorização dos pais.";
    } else if (idade >= 16 && temAutorizacaoPais) {
      return "Você tem entre 16 e 17 anos e possui autorização dos pais, pode dirigir.";
    } else {
      return "Você não pode dirigir ainda.";
    }
  }
  var idade1 = 15;
  var temAutorizacaoPais01 = false;
  console.log (podeDirigir(idade1, temAutorizacaoPais01)); 
  var idade2 = 16;
  var temAutorizacaoPais02 = true;
  console.log (podeDirigir(idade2, temAutorizacaoPais02)); 
  var idade3 = 18;
  var temAutorizacaoPais03 = false;
  console.log (podeDirigir(idade3, temAutorizacaoPais03));
