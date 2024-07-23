const prompt = require('prompt-sync')();
const { adicionar, remover, atualizar, listar } = require('./main');

while (true) {
    console.log("\nEscolha uma opção: \n1. Adicionar voto \n2. Remover voto \n3. Atualizar voto \n4. Listar votos \n5. Sair");

    const choice = prompt("Digite o número da opção: ");

    switch (choice) {
        case '1':
            const candidatoAd = parseInt(prompt("Digite o número do candidato (1-4): "));
            adicionar(candidatoAd);
            break;
        case '2':
            const candidatoRe = parseInt(prompt("Digite o número do candidato (1-4): "));
            remover(candidatoRe);
            break;
        case '3':
            const Antigocandidato = parseInt(prompt("Digite o número do candidato atual (1-4): "));
            const Novocandidato = parseInt(prompt("Digite o número do novo candidato (1-4): "));
            atualizar(Antigocandidato, Novocandidato);
            break;
        case '4':
            listar();
            break;
        case '5':
            console.log("Saindo...");
            return;
        default:
            console.log("Opção inválida!");
    }
}