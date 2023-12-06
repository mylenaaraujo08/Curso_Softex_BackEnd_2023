interface Sanduiche {
    getDescricao(): string;
    getCusto(): number;
}

class SanduicheBase implements Sanduiche {
    getDescricao(): string {
        return 'Sanduíche';
    }

    getCusto(): number {
        return 0;
    }
}

class FrangoAssado implements Sanduiche {
    getDescricao(): string {
        return 'Frango Assado';
    }

    getCusto(): number {
        return 4.5;
    }
}

class Peperoni implements Sanduiche {
    constructor(private sanduiche: Sanduiche) {}

    getDescricao(): string {
        return `${this.sanduiche.getDescricao()}, Peperoni`;
    }

    getCusto(): number {
        return this.sanduiche.getCusto() + 0.99;
    }
}

class QueijoMussarelaRalado implements Sanduiche {
    constructor(private sanduiche: Sanduiche) {}

    getDescricao(): string {
        return `${this.sanduiche.getDescricao()}, Queijo Mussarela Ralado`;
    }

    getCusto(): number {
        return this.sanduiche.getCusto() + 2.99;
    }
}

let meuSanduiche: Sanduiche = new FrangoAssado();
meuSanduiche = new Peperoni(meuSanduiche);
meuSanduiche = new QueijoMussarelaRalado(meuSanduiche);

console.log(`${meuSanduiche.getDescricao()} custa $${meuSanduiche.getCusto().toFixed(2)}`);
