const pessoa = {};
pessoa.nome = "João";

const usuario = {
    idade: 30 
  };
  console.log(usuario.idade);

  const idadeDoUsuario = usuario.idade;
  const produto = {
    preco: 50
  };
  console.log(produto.preco);

  const contato = {
    nome: "João",
    email:"joãobarbosa@gmail.com"
  };
  const contatoSemEmail = {...contato};
  delete contatoSemEmail.email;
  console.log(contatoSemEmail);

const cliente = {
  nome: "Maria",
  idade: 24
};
cliente.endereco = "Rua A, 123";
console.log(cliente);

const empresa = {
  departamentos: [
    { nome: "Marketing", funcionarios: 15},
    { nome: "RH", funcionarios: 20},
    { nome: " Contabilidade", funcionarios: 10}
  ]
};
const primeiroDepartamento = empresa.departamentos[0].nome;
console.log(primeiroDepartamento);

const aluno = {
  notas: [85,90,78]
};
aluno.notas[1] = 95;
console.log(aluno.notas);

const dados = {
  valores: [10,20,30]
};
dados.valores.splice(1,1);
console.log(dados.valores);

const livro = {
  titulo: "livro",
  autor: "Maria"
};
console.log(livro);
