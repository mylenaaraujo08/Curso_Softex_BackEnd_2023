interface Pato {
    grasnar(): void;
    voar(): void;
}

class PatoSelvagem implements Pato {
    grasnar(): void {
        console.log("Pato está grasnando!");
    }

    voar(): void {
        console.log("Pato está voando!");
    }
}

interface Galinha {
    cacarejar(): void;
    voarBaixo(): void;
}

class GalinhaComum implements Galinha {
    cacarejar(): void {
        console.log("Galinha está cacarejando!");
    }

    voarBaixo(): void {
        console.log("Galinha está voando baixo!");
    }
}

class AdaptadorPato implements Galinha {
    private pato: Pato;

    constructor(pato: Pato) {
        this.pato = pato;
    }

    cacarejar(): void {
        this.pato.grasnar(); // Traduz o grasnado do pato para o cacarejo da galinha
    }

    voarBaixo(): void {
        this.pato.voar(); // Traduz o voo do pato para o voo baixo da galinha
    }
}

class AdaptadorPatoDemo {
    static testarAdaptador(): void {
        const patoSelvagem = new PatoSelvagem();
        const adaptador = new AdaptadorPato(patoSelvagem);

        console.log("O pato tenta ser uma galinha:");
        adaptador.cacarejar(); // O pato grasna, mas traduzido como cacarejo
        adaptador.voarBaixo(); // O pato voa, mas traduzido como voo baixo
    }
}

AdaptadorPatoDemo.testarAdaptador();
