const readline = require('readline-sync');
const Candidato = {
    X: "candidato_X",
    Y: "candidato_Y",
    Z: "candidato_Z",
};
const numeroParaCandidato = {
    1: Candidato.X,
    2: Candidato.Y,
    3: Candidato.Z,
};
var votos = {
    [Candidato.X]: 0,
    [Candidato.Y]: 0,
    [Candidato.Z]: 0,
    "Branco": 0,
    "Nulo": 0,
};
while (true) {
    console.log("Eleição - Escolha seu candidato:");
    console.log(`1 - Candidato X = 889`);
    console.log(`2 - Candidato Y = 847`);
    console.log(`3 - Candidato Z  = 515`);
    console.log(`4 - Voto em Branco  = 0`);
    console.log("5 - Encerrar a votação");
  
    var voto = readline.questionInt("Digite o número do seu voto:");
    
  if (voto >= 1 && voto <= 5) {
        switch (voto) {
            case 1:
            case 2:
            case 3:
                const candidatoEscolhido = numeroParaCandidato[voto];
                votos[candidatoEscolhido]++;
                break;
            case 4:
                votos["Branco"]++;
                break;
            case 5:
                break;
        }
        if (voto === 5) {
            break;
        }
    } else {
        console.log("Voto inválido: Digite um número válido");
    }
}
console.log("\nVotação encerrada");
console.log("Resultados da Votação:");

for (const candidato in votos) {
    console.log(`${candidato}: ${votos[candidato]} votos`);
}
// Determinar o vencedor
var vencedor = null;
for (const candidato in votos) {
    if (vencedor === null || votos[candidato] > votos[vencedor]) {
        vencedor = candidato;
    }
}
if (vencedor === "Branco" || vencedor === "Nulo") {
    console.log(`Vencedor: Votação em ${vencedor}`);
} else {
    console.log(`Vencedor: ${vencedor} com ${votos[vencedor]} votos`);
