class Pessoa {
    nome: string;
    idade: number;
    email: string;

    constructor(nome: string, idade: number, email: string) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
}

const pessoa1 = new Pessoa("Mylena", 24, "mylena08@gmail.com");

console.log(`Nome: ${pessoa1.nome}`);
console.log(`Idade: ${pessoa1.idade}`);
console.log(`Email: ${pessoa1.email}`);

class Aluno extends Pessoa {
    matricula: string;

    constructor(nome: string, idade: number, email: string, matricula: string) {
        super(nome, idade, email);
        this.matricula = matricula;
    }
}

const pessoa2 = new Pessoa("Karen", 30, "karen08@gmail.com");
const aluno1 = new Aluno("Rayra", 25, "rayra@gmail.com", "2023101268");

console.log(pessoa2);
console.log(aluno1);

class Retangulo {
    largura: number;
    altura: number;

    constructor(largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea(): number {
        return this.largura * this.altura;
    }
    calcularPerimetro(): number {
        return 2 * (this.largura + this.altura);
    }
}

const retangulo = new Retangulo(5, 10);

const area = retangulo.calcularArea();
const perimetro = retangulo.calcularPerimetro();

console.log(`Área: ${area}`);
console.log(`Perímetro: ${perimetro}`);

class Circulo {
    raio: number;

    constructor(raio: number) {
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * Math.pow(this.raio, 2);
    }

    calcularCircunferencia(): number {
        return 2 * Math.PI * this.raio;
    }
}

class ContaBancaria {
    saldo: number;
    numeroConta: string;

    constructor(numeroConta: string) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente");
        }
    }

    verificarSaldo(): number {
        return this.saldo;
    }
}

const circulo = new Circulo(25);
console.log("Área do círculo:", circulo.calcularArea());
console.log("Circunferência do círculo:", circulo.calcularCircunferencia());

const conta = new ContaBancaria("253849");
console.log("Saldo inicial:", conta.verificarSaldo());

conta.depositar(10000);
console.log("Saldo após depósito:", conta.verificarSaldo());

conta.sacar(500);
console.log("Saldo após saque:", conta.verificarSaldo());

class Produto {
    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularValorTotal(): number {
        return this.preco * this.quantidade;
    }
}

const produto1 = new Produto("tênis", 120, 20);
const valorTotal = produto1.calcularValorTotal();

console.log(`Produto: ${produto1.nome}`);
console.log(`Preço unitário: R$${produto1.preco}`);
console.log(`Quantidade: ${produto1.quantidade}`);
console.log(`Valor total: R$${valorTotal}`);

class Triangulo {
    lado1: number;
    lado2: number;
    lado3: number;

    constructor(lado1: number, lado2: number, lado3: number) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    verificarTrianguloValido(): boolean {
        return this.lado1 + this.lado2 > this.lado3 &&
               this.lado1 + this.lado3 > this.lado2 &&
               this.lado2 + this.lado3 > this.lado1;
    }
}

class Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;

    constructor(titulo: string, autor: string, anoPublicacao: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }

    exibirInformacoes(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Ano de Publicação: ${this.anoPublicacao}`);
    }
}

class Agenda {
    contatos: Map<string, string>;

    constructor() {
        this.contatos = new Map();
    }

    adicionarContato(nome: string, telefone: string): void {
        this.contatos.set(nome, telefone);
    }

    listarContatos(): void {
        this.contatos.forEach((telefone, nome) => {
            console.log(`Nome: ${nome}, Telefone: ${telefone}`);
        });
    }

    removerContato(nome: string): void {
        this.contatos.delete(nome);
    }
}

class Carro {
    velocidade: number;

    constructor() {
        this.velocidade = 0;
    }

    acelerar(): void {
        this.velocidade += 10; 
    }

    desacelerar(): void {
        this.velocidade -= 10; 
    }
}

class CarroEsportivo extends Carro {
    acelerarRapidamente(): void {
        this.velocidade += 50; 
    }

    produzirSomEsportivo(): void {
        console.log("Vrum vrum! 🏎💨");
    }
}
