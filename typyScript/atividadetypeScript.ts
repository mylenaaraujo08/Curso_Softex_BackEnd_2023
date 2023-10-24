class Casa {
  private nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
  public exibirNome(): void {
    console.log(`Casa: ${this.nome}`);
  }
}
class Stark extends Casa {
  private lema: string;
  constructor() {
    super('Stark');
    this.lema = 'O inverno está chegando';
  }
  public exibirLema(): void {
    console.log(`Lema: ${this.lema}`);
  }
}
class Targaryen extends Casa {
  private simbolo: string;
  constructor() {
    super('Targaryen');
    this.simbolo = 'Dragão';
  }
  get Simbolo(): string {
    return this.simbolo;
  }
  set Simbolo(novoSimbolo: string) {
    this.simbolo = novoSimbolo;
  }
}
const casaStark = new Stark();
casaStark.exibirNome();
casaStark.exibirLema();

const casaTargaryen = new Targaryen();
casaTargaryen.exibirNome();

console.log(`Símbolo: ${casaTargaryen.Simbolo}`);
casaTargaryen.Simbolo = 'Dragão de três cabeças';
console.log(`Novo Símbolo: ${casaTargaryen.Simbolo}`);
