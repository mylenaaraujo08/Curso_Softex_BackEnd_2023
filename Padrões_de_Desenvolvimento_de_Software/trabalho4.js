class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = "senha_secreta"; // Senha da base secreta

    private constructor() {
    }

    static getInstance(): SistemaSeguranca {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca();
        }
        return SistemaSeguranca.instancia;
    }

    acessarBaseSecreta(senhaInserida: string): void {
        if (senhaInserida === this.senhaBaseSecreta) {
            console.log("Acesso concedido à base secreta. Bem-vindo, agente!");
        } else {
            console.log("Acesso negado. Senha incorreta. Intruso detectado!");
        }
    }
}

function main(): void {
    const sistemaSeguranca = SistemaSeguranca.getInstance();

    sistemaSeguranca.acessarBaseSecreta("senha_incorreta"); // Tentativa com senha incorreta
    sistemaSeguranca.acessarBaseSecreta("senha_secreta"); // Tentativa com senha correta
}

main();
