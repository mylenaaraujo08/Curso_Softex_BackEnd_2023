let candidato_X = 0;
let candidato_Y = 0;
let candidato_Z = 0;
let branco = 0;

while (true) {
    console.log("Eleição - Escolha seu candidato:");
    console.log("1 - Candidato X = 889");
    console.log("2 - Candidato Y = 847");
    console.log("3 - Candidato Z = 515");
    console.log("4 - Voto em Branco = 0");
    console.log("5 - Encerrar a votação");

    let voto = prompt("Digite o número do seu voto:");

    if (!isNaN(voto)) {
        voto = parseInt(voto);

        switch (voto) {
            case 1:
                candidato_X++;
                break;
            case 2:
                candidato_Y++;
                break;
            case 3:
                candidato_Z++;
                break;
            case 4:
                branco++;
                break;
            case 5:
                break;
            default:
                console.log("Voto nulo: Opção inválida");
                break;
        }
    } else {
        console.log("Voto inválido: Digite um número válido");
    }

    if (voto === 5) {
        break;
    }
}

const total_votos = candidato_X + candidato_Y + candidato_Z + branco;
console.log("\nVotação encerrada");
console.log(`Total de votos: ${total_votos}`);
console.log(`Candidato X: ${candidato_X} votos`);
console.log(`Candidato Y: ${candidato_Y} votos`);
console.log(`Candidato Z: ${candidato_Z} votos`);
console.log(`Votos em branco: ${branco} votos`);
console.log(`Votos nulos: ${total_votos - (candidato_X + candidato_Y + candidato_Z + branco)} votos`);

const vencedor = Math.max(candidato_X, candidato_Y, candidato_Z);
if (vencedor === candidato_X) {
    console.log("Candidato X é o vencedor!");
} else if (vencedor === candidato_Y) {
    console.log("Candidato Y é o vencedor!");
} else if (vencedor === candidato_Z) {
    console.log("Candidato Z é o vencedor!");
}
    }
}
if (vencedor === "Branco" || vencedor === "Nulo") {
    console.log(`Vencedor: Votação em ${vencedor}`);
} else {
    console.log(`Vencedor: ${vencedor} com ${votos[vencedor]} votos`);
