interface IVeiculo {
    clone(): IVeiculo;
    represent(): string;
}

class Veiculo implements IVeiculo {
    constructor(
        public modelo: string,
        public marca: string,
        public cor: string,
        public numeroRodas: number
    ) {}

    clone(): IVeiculo {
        return Object.create(this);
    }

    represent(): string {
        return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`;
    }
}

class Carro extends Veiculo {
    constructor(
        modelo: string,
        marca: string,
        cor: string,
        numeroRodas: number,
        public numeroPortas: number
    ) {
        super(modelo, marca, cor, numeroRodas);
    }

    represent(): string {
        return `${super.represent()}, Portas: ${this.numeroPortas}`;
    }
}

class Moto extends Veiculo {
    constructor(
        modelo: string,
        marca: string,
        cor: string,
        numeroRodas: number,
        public tipo: string
    ) {
        super(modelo, marca, cor, numeroRodas);
    }

    represent(): string {
        return `${super.represent()}, Tipo: ${this.tipo}`;
    }
}

class Aplicacao {
    static main() {
        let carroOriginal = new Carro('Fusca', 'Volkswagen', 'Rosa', 4, 4);
        let motoOriginal = new Moto('CG 125', 'Honda', 'Preto', 2, 'Street');

        let veiculos: IVeiculo[] = [];
        for (let i = 0; i < 3; i++) {
            veiculos.push(carroOriginal.clone());
        }
        for (let i = 0; i < 3; i++) {
            veiculos.push(motoOriginal.clone());
        }

        let clonesVeiculos: IVeiculo[] = Aplicacao.clonarVeiculos(veiculos);

        for (let veiculo of clonesVeiculos) {
            console.log(veiculo.represent());
        }

        return clonesVeiculos;
    }

    static clonarVeiculos(veiculos: IVeiculo[]): IVeiculo[] {
        return veiculos.map(veiculo => veiculo.clone());
    }
}

Aplicacao.main();
