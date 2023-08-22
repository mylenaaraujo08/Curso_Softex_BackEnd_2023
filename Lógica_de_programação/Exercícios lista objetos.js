const objetoVazio = {};

const pessoa = {};
pessoa.nome = "João";

const usuario = { nome: "Mylena", idade: 24};
const idadeDoUsuario = usuario["idade"];
console.log(idadeDoUsuario);

const produto = { preco:50};
produto.preco = 75;
console.log(produto.preco);

const contato = {
  nome:" Mylena",
  email:"mylena08@gmail.com"
};
delete contato.email;

const cliente = {
  nome: " Larissa",
  idade: 28
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
  autor: "João"
};
console.log(livro);



