let animais = [
    ["Gato", "Birmanês", 6],
    ["Cachorro", "poodle", 4],
    ["Pássaro", "João-de-barro", 8]
];
function mostrarInformacoesAnimais(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        let animal = matriz[i];
        let nome = animal[0];
        let especie = animal[1];
        let idade = animal[2];
        console.log("Animal:", nome);
        console.log("Espécie:", especie);
        console.log("Idade:", idade);
    }
}
mostrarInformacoesAnimais(animais);
