const DiaDaSemana = {
  Domingo: "Domingo",
  Segunda: "Segunda-feira",
  Terça: "terça-feira",
  Quarta: "Quarta-feira",
  Quinta: "Quinta-feira",
  Sexta: "Sexta-feira",
  Sabado: "Sábado"
};
console.log (DiaDaSemana.Domingo);

const TipoInimigo = {
  CASA1: "Stark",
  CASA2: "Targaryen",
  CASA3: "Lannister",
  CASA4: "Baratheon",
  CASA5: "Greyjoy"
};

let inimigo = {
  nome: 'Inimigo 1',
  tipo: TipoInimigo.CASA2
};

if (inimigo.tipo === TipoInimigo.CASA2) {
  console.log('Fortaleza da familia Targaryen!');
} else if (inimigo.tipo === TipoInimigo.ORC) {
  console.log('Fortaleza da familia Stark!');
}

const CategoriaTarefa = {
  TRABALHO: 'Trabalho',
  ESTUDO: 'Estudo',
  LAZER: 'Lazer'
};

let tarefa = {
  descricao: 'Fazer relatório mensal',
  categoria: CategoriaTarefa.TRABALHO
};

if (tarefa.categoria === CategoriaTarefa.ESTUDO) {
  console.log('Tarefa de estudo');
} else if (tarefa.categoria === CategoriaTarefa.LAZER) {
  console.log('Tarefa de lazer');
}

