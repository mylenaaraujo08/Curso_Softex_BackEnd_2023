let livro1 = {
  titulo: "Harry Potter e a Ordem da Fênix",
  autor: "J. K. Rowling",
  ler: function() {
    console.log(`Você está lendo ${this.titulo} por ${this.autor}.`);
  },
  mostrarDetalhes: function() {
    console.log(`Título: ${this.titulo}\nAutor: ${this.autor}`);
  },
  emprestar: function() {
    console.log(`O livro ${this.titulo} foi emprestado.`);
  }
};

let musica = {
  nome: "Iguaria",
  artista: "Luisa Sonza",
  genero: "Pop",
  tocar: function() {
    console.log(`Tocando a música "${this.nome}" por ${this.artista}.`);
  },
  pausar: function() {
    console.log(`A música "${this.nome}" está pausada.`);
  },
  parar: function() {
    console.log(`A música "${this.nome}" foi parada.`);
  },
  trocar: function(novaMusica) {
    this.nome = novaMusica;
    console.log(`Trocou para a música "${this.nome}" por ${this.artista}.`);
  }
};

// Livro Harry Potter
livro1.ler(); 
livro1.mostrarDetalhes(); 
livro1.emprestar();

// Música
musica.tocar();
musica.parar();
musica.trocar("Surreal"); 
