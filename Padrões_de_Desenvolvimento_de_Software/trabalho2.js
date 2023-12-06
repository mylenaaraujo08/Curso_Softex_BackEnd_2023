class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    clone() {
        return Object.create(this);
    }

    represent() {
        return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`;
    }
}

class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
        super(modelo, marca, cor, numeroRodas);
        this.numeroPortas = numeroPortas;
    }

    represent() {
        return `${super.represent()}, Portas: ${this.numeroPortas}`;
    }
}

class Moto extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, tipo) {
        super(modelo, marca, cor, numeroRodas);
        this.tipo = tipo;
    }

    represent() {
        return `${super.represent()}, Tipo: ${this.tipo}`;
    }
}

class Aplicacao {
    static main() {
        let carroOriginal = new Carro('Fusca', ' Volkswagen', 'Rosa', 4, 4);
        let motoOriginal = new Moto('CG 125', 'Honda', 'Preto', 2, 'Street');

        let veiculos = [];
        for (let i = 0; i < 3; i++) {
            veiculos.push(carroOriginal.clone());
        }
        for (let i = 0; i < 3; i++) {
            veiculos.push(motoOriginal.clone());
        }

        let clonesVeiculos = Aplicacao.clonarVeiculos(veiculos);

        for (let veiculo of clonesVeiculos) {
            console.log(veiculo.represent());
        }

        return clonesVeiculos;
    }
    static clonarVeiculos(veiculos) {
        return veiculos.map(veiculo => veiculo.clone());
    }
}
Aplicacao.main();
