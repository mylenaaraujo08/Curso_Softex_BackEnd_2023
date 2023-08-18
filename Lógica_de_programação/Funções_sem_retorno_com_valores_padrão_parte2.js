const nome = "Mylena";
const idade = "24";
const profissao = "Administradora";
console.log (` olá, eu sou ${nome}, tenho ${idade} anos, e sou ${profissao}`);

function mensagemPersonalizada(texto, estilo = "normal") {
  switch (estilo) {
    case "normal":
      console.log(texto);
      break;
    case "negrito":
      console.log(`**${texto}**`);
      break;
    case "italico":
      console.log(`_${texto}_`);
      break;
    default:
      console.log("Estilo inválido.");
      return;
  }
}
mensagemPersonalizada("Quintou!", "negrito");      
