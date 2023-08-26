let animais = [
    ["Gato", "Felino", 6],
    ["Cachorro", "Canino", 4],
    ["Passáro", "Ave", 8],
    ["Leão", "Felino", 10],
    ["Cobra", "Reptil", 5]
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
