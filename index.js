const readline = require('readline-sync');

class Veiculo {
  constructor(tipo, modelo, ano, cores, preco) {
    this.tipo = tipo;
    this.modelo = modelo;
    this.ano = ano;
    this.cores = cores;
    this.preco = preco;
  }

  exibir() {
    console.log("------------------------");
    console.log(`Tipo: ${this.tipo}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Ano: ${this.ano}`);
    console.log(`Cor: ${this.cores}`);
    console.log(`Preço: ${this.preco.toLocaleString('pt-br', { minimumFractionDigits: 2 })} `);
    console.log("------------------------");
  }
}

let veiculos = [
  new Veiculo("Carro", "Citroen c4", 2020, "Prata", 35000),
  new Veiculo("Carro", "Fusca", 1989, "Preto", 85000),
  new Veiculo("Carro", "Ferrari", 2023, "Vermelho", 35000000),
  new Veiculo("Moto", "Yamaha Fluo", 2022, "Branco", 25000),
  new Veiculo("Moto", "Pcx", 2021, "Preta", 45000),
  new Veiculo("Moto", "Fazer", 2019, "Azul", 23000)
];

function listarVeiculos(tipoModificado) {
  console.log(`Listando veículos ${tipoModificado ? `do tipo "${tipoModificado}"` : ''}`);
  console.log("---------------------------");

  const veiculosFiltrados = tipoModificado ? veiculos.filter(v => v.tipo.toLowerCase() === tipoModificado.toLowerCase()) : veiculos;

  if (veiculosFiltrados.length > 0) {
    veiculosFiltrados.forEach(v => v.exibir());
  } else {
    console.log(`Nenhum veículo ${tipoModificado ? `do tipo "${tipoModificado}" ` : ''}encontrado.`);
  }
}



function cadastrarNovoVeiculo(tipo) {
  console.log(`Cadastrar um novo veículo do tipo "${tipo}"`);
  console.log("--------------------------");

  let modelo = readline.question("Modelo do veículo: ");
  let ano = readline.questionInt("Ano do veículo: ");
  let cores = readline.question("Cores disponíveis: ");
  let preco = parseFloat(readline.question("Preço do veículo: "));

  const novoVeiculo = new Veiculo();
  novoVeiculo.tipo = tipo;
  novoVeiculo.modelo = modelo;
  novoVeiculo.ano = ano;
  novoVeiculo.cores = cores.split(",").map(c => c.trim());
  novoVeiculo.preco = preco;

  veiculos.push(novoVeiculo);

  console.log(`Veículo "${modelo}" cadastrado com sucesso!`);

  console.log("Veículo cadastrado:");
  novoVeiculo.exibir();
}

function buscarVeiculoPorTipoModeloAno() {
  console.log("Buscar veículo por tipo, modelo e ano");
  console.log("------------------------");

  const tipoBusca = readline.question("Qual o tipo do veículo que deseja buscar: ");
  const modeloBusca = readline.question("Qual o modelo do veículo que deseja buscar: ");
  const anoBusca = readline.questionInt("Qual o ano do veículo que deseja buscar: ");

  const encontrados = veiculos.filter(v =>
    v.tipo.toLowerCase() === tipoBusca.toLowerCase() &&
    v.modelo.toLowerCase() === modeloBusca.toLowerCase() &&
    v.ano === anoBusca
  );

  if (encontrados.length > 0) {
    console.log("Resultado da busca");
    console.log("------------------------");
    encontrados.forEach(v => v.exibir());
  } else {
    console.log(`Nenhum veículo encontrado com o tipo "${tipoBusca}", modelo "${modeloBusca}" e ano "${anoBusca}"`);
  }
  readline.keyInPause();
}

function alterarVeiculo() {
  console.log("Alterar um veículo");
  console.log("------------------------");

  const tipoAltera = readline.question("Qual tipo do veículo deseja alterar: ");
  const veiculosEncontrados = veiculos.filter(v => v.tipo.toLowerCase() === tipoAltera.toLowerCase());

  if (veiculosEncontrados.length > 0) {
    console.log("Veículos encontrados:");
    veiculosEncontrados.forEach((v, i) => console.log(`${i + 1} - ${v.modelo}`));

    const veiculoIndex = readline.questionInt("Escolha o veículo que deseja alterar (pelo número): ");
    const veiculoSelecionado = veiculosEncontrados[veiculoIndex - 1];

    if (veiculoSelecionado) {
      let continuarAlterando = true;

      while (continuarAlterando) {
        console.log(`Veículo selecionado: ${veiculoSelecionado.modelo}`);
        console.log("Opções de modificação:");
        console.log("1 - Alterar Modelo");
        console.log("2 - Alterar Ano");
        console.log("3 - Alterar Cores");
        console.log("4 - Alterar Preço");
        console.log("0 - Sair");

        const opcaoModificacao = readline.questionInt("Escolha a opção de modificação: ");
        console.log("---------------------------");

        switch (opcaoModificacao) {
          case 1:
            veiculoSelecionado.modelo = readline.question("Informe o novo Modelo do veículo: ");
            break;
          case 2:
            veiculoSelecionado.ano = readline.questionInt("Informe o novo Ano do veículo: ");
            break;
          case 3:
            veiculoSelecionado.cores = readline.question("Informe a nova Cor do veículo: ");
            break;
          case 4:
            veiculoSelecionado.preco = parseFloat(readline.question("Novo Preço do veículo: "));
            break;
          case 0:
            continuarAlterando = false;
            break;
          default:
            console.log("** Opção inválida! ***  Por favor escolha uma opção Válida ");
            break;
        }

        if (continuarAlterando) {
          console.log(`O veículo "${veiculoSelecionado.modelo}" foi alterado com sucesso!`);

          const continuarOpcao = readline.keyInYNStrict("Deseja continuar alterando? (Sim/Não): ");
          if (!continuarOpcao) {
            continuarAlterando = false;
          }
        }
      }
    } else {
      console.log("Número de veículo selecionado é inválido.");
    }
  } else {
    console.log(`*** O Veículo ${tipoAltera} não foi encontrado.***`);
  }
  readline.keyInPause();
}

function removerVeiculo(tipoRemover) {
  console.log(`Remover veículos do tipo "${tipoRemover}"`);
  console.log("------------------------");

  let veiculosParaRemover = veiculos.filter(veiculo => veiculo.tipo.toLowerCase() === tipoRemover.toLowerCase());

  if (veiculosParaRemover.length === 0) {
    console.log(`Nenhum veículo do tipo "${tipoRemover}" encontrado.`);
    let adicionarVeiculo = readline.keyInYN(`Deseja adicionar um veículo do tipo "${tipoRemover}"? (Sim/Não): `);
    if (adicionarVeiculo) {
      cadastrarNovoVeiculo(tipoRemover);
    }
  } else {
    while (veiculosParaRemover.length > 0) {
      console.clear();
      console.log(`Removendo veículos do tipo: ${tipoRemover}`);
      console.log("------------------------");

      veiculosParaRemover.forEach((veiculo, i) => console.log(`${i + 1} - ${veiculo.modelo}`));

      const veiculoIndex = readline.questionInt("Escolha o veículo que deseja remover (pelo número): ");
      const veiculoSelecionado = veiculosParaRemover[veiculoIndex - 1];

      if (veiculoSelecionado) {
        veiculos = veiculos.filter(veiculo => veiculo !== veiculoSelecionado);

        console.log(`O veículo "${veiculoSelecionado.modelo}" foi removido com sucesso!`);

        veiculosParaRemover.length = 0; // Limpa o array para evitar repetições

        let continuarRemovendo = readline.keyInYNStrict("Deseja continuar a remover outro veículo? (Sim/Não): ");
        if (continuarRemovendo) {
          veiculosParaRemover.push(...veiculos.filter(veiculo => veiculo.tipo.toLowerCase() === tipoRemover.toLowerCase()));
          continue;
        }
      } else {
        console.log("Número de veículo selecionado é inválido.");
      }
    }
  }

  console.log("Não há mais itens para remover.");
  readline.keyInPause();
}

function imprimirOpcoesEscolha() {
  console.log("Listando todos os veículos:");
  console.log("------------------------");
  console.log("Tipos de veículos disponíveis:");
  console.log("1 - Carro");
  console.log("2 - Moto");
}

let loop = true;

while (loop) {
  console.clear();
  console.log("============ CADASTRO DE VEÍCULOS ===========");
  console.log("==================== MENU ===================");

  console.log("1 - Listar veículos (por tipo)");
  console.log("2 - Cadastrar um novo veículo");
  console.log("3 - Buscar veículo por tipo, modelo e ano");
  console.log("4 - Alterar um veículo");
  console.log("5 - Remover um veículo");

  console.log("================ MENU ADICIONAL ==============");
  console.log("6 - Listar veículos por tipo modificado");
  console.log("0 - Sair do Sistema");
  console.log("==============================================");
  const opcao = readline.questionInt("Escolha uma opção: ");

  switch (opcao) {
    case 1:
      imprimirOpcoesEscolha();
      const tipoEscolhido = readline.questionInt("Escolha o tipo de veículo que deseja listar (pelo número): ");
      const tipo = tipoEscolhido === 1 ? 'Carro' : (tipoEscolhido === 2 ? 'Moto' : '');
      if (tipo) listarVeiculos(tipo);
      else console.log("Opção inválida. Por favor, escolha 1 para Carro ou 2 para Moto.");
      break;
    case 2:
      const tipoCadastro = readline.question("Qual o tipo do veículo que deseja cadastrar: ");
      cadastrarNovoVeiculo(tipoCadastro);
      break;
    case 3:
      buscarVeiculoPorTipoModeloAno();
      break;
    case 4:
      alterarVeiculo();
      break;
    case 5:
      imprimirOpcoesEscolha();
      const tipoRemover = readline.questionInt("Escolha o tipo de veículo que deseja remover (pelo número): ");
      const tipoRemoverTexto = tipoRemover === 1 ? 'Carro' : (tipoRemover === 2 ? 'Moto' : '');
      if (tipoRemoverTexto) removerVeiculo(tipoRemoverTexto);
      else console.log("Opção inválida. Por favor, escolha 1 para Carro ou 2 para Moto.");
      break;
    case 6:
      const tipoModificado = readline.question("Digite o tipo modificado: ");
      listarVeiculos(tipoModificado);
      break;
    case 0:
      console.log("Obrigado por acessar nosso sistema! Atendimento encerrado...");
      loop = false;
      break;
    default:
      console.log("*** Opção inválida! ***");
      break;
  }
  readline.keyInPause();
}
