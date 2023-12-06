class Sanduiche {
    getDescricao() {
        return 'Sanduíche';
    }

    getCusto() {
        return 0;
    }
}

class FrangoAssado extends Sanduiche {
    getDescricao() {
        return 'Frango Assado';
    }

    getCusto() {
        return 4.5;
    }
}

class Peperoni extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    getDescricao() {
        return `${this.sanduiche.getDescricao()}, Peperoni`;
    }

    getCusto() {
        return this.sanduiche.getCusto() + 0.99;
    }
}

class QueijoMussarelaRalado extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    getDescricao() {
        return `${this.sanduiche.getDescricao()}, Queijo Mussarela Ralado`;
    }

    getCusto() {
        return this.sanduiche.getCusto() + 2.99;
    }
}

let meuSanduiche = new FrangoAssado();
meuSanduiche = new Peperoni(meuSanduiche);
meuSanduiche = new QueijoMussarelaRalado(meuSanduiche);

console.log(`${meuSanduiche.getDescricao()} custa $${meuSanduiche.getCusto().toFixed(2)}`);
