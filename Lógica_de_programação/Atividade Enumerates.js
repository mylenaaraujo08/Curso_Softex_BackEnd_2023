const DiaDaSemana = {
  Domingo: "Domingo",
  Segunda: "Segunda-feira",
  Terça: "Terça-feira",
  Quarta: "Quarta-feira",
  Quinta: "Quinta-feira",
  Sexta: "Sexta-feira",
  Sabado: "Sábado"
};
console.log(DiaDaSemana.Domingo);

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
  console.log('Atacar fortaleza da familia Targaryen!');
} else if (inimigo.tipo === TipoInimigo.CASA1) {
  console.log('Atacar fortaleza da familia Stark!');
}

const reservaAeria = {
  Economica: "Classe Econômica",
  Executiva: "Executiva",
  Primeira_Classe: "Primeira_Classe"
};

let reserva = {
  Passagem: `Duas passagens`,
  tipo: reservaAeria.Executiva
};
if (reserva.tipo === reservaAeria.Executiva) {
  console.log(`Reservar passagem na Executiva`);
} else if (reserva.tipo === reservaAeria.Primeira_Classe) {
  console.log(`Reservar passagem na Primeira Classe`);
}

const CategoriaTarefa = {
  TRABALHO: 'Trabalho',
  ESTUDO: 'Estudo',
  LAZER: 'Lazer'
};

let tarefa = {
  descricao: 'Estudar para semana de prova',
  categoria: CategoriaTarefa.ESTUDO
};

if (tarefa.categoria === CategoriaTarefa.ESTUDO) {
  console.log('Tarefa de estudo');
} else if (tarefa.categoria === CategoriaTarefa.LAZER) {
  console.log('Tarefa de lazer');
}


