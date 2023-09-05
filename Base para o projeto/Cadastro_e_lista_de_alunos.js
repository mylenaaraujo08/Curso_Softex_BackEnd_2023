const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let gerador_matricula = 2023100000;

const alunos = [
  {
    Nome: "Mylena Oliveira",
    Matricula: 2023101244,
    Notas: [8.0, 7.5, 6.5]
  },
  {
    Nome: "Rayra Medeiros",
    Matricula: 2023101255,
    Notas: [7.5, 8.5, 7.0]
  }
];

function cadastrarAluno() {
  rl.question('Digite o nome do aluno: ', (nome) => {
    const matricula = gerador_matricula++;
    const notas = [];

    function lerNota(indice) {
      if (indice < 3) {
        rl.question(`Digite a nota ${indice + 1} do aluno: `, (nota) => {
          notas.push(parseFloat(nota));
          lerNota(indice + 1);
        });
      } else {
        const aluno = {
          Nome: nome,
          Matricula: matricula,
          Notas: notas
        };

        alunos.push(aluno);
        console.log('Aluno cadastrado com sucesso!');
        rl.question('Pressione Enter para continuar...', () => {
          main();
        });
      }
    }

    lerNota(0);
  });
}

function calcularMedia(notas) {
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  return soma / notas.length;
}

function calcularMediaGeral() {
  const totalNotas = alunos.reduce((acc, aluno) => acc.concat(aluno.Notas), []);
  return calcularMedia(totalNotas);
}

function listarAlunos() {
  console.clear();
  console.log('=== Lista de Alunos ===');
  for (const aluno of alunos) {
    console.log('Nome:', aluno.Nome);
    console.log('Matrícula:', aluno.Matricula);
    console.log('Notas:', aluno.Notas.join(', '));
    const media = calcularMedia(aluno.Notas);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log('------------------------');
  }

  const mediaGeral = calcularMediaGeral();
  console.log(`Média Geral dos Alunos: ${mediaGeral.toFixed(2)}`);
  rl.question('Pressione Enter para continuar...', () => {
    main();
  });
}

function main() {
  console.clear();
  console.log('=== Cadastro dos alunos ===');
  console.log(' === MENU ===');
  console.log('0 - Sair do sistema');
  console.log('1 - Cadastrar aluno');
  console.log('2 - Lista de Alunos');

  rl.question('Escolha uma opção: ', (choice) => {
    switch (choice) {
      case '0':
        console.log('Saindo do sistema...');
        rl.close();
        break;
      case '1':
        cadastrarAluno();
        break;
      case '2':
        listarAlunos();
        break;
      default:
        console.log('Opção inválida. Tente novamente.');
        rl.question('Pressione Enter para continuar...', () => {
          main();
        });
        break;
    }
  });
}

main();
