const listaUsuario = [
  { nome: "Alice", idade: 20},
  { nome: "Carol", idade: 28},
  { nome: "Helena", idade: 23}
];
console.log("Nomes usando for...of:");
for (let usuario of listaUsuario) {
  console.log(usuario.nome);
}
console.log("Propriedades dos objetos usando for...in:");
for (let i in listaUsuario) {
  console.log(`Índice: ${i}`);
  for (let propriedade in listaUsuario[i]) {
    console.log(`${propriedade}: ${listaUsuario[i][propriedade]}`);
  }
}
