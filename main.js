const votos = [0, 0, 0, 0];

function adicionar(candidato) {
    if (candidato < 1 || candidato > 4) {
        console.log("Número de candidato inválido!");
        return;
    }
    votos[candidato - 1]++;
    console.log(`Voto adicionado para o candidato ${candidato}`);
}

function remover(candidato) {
    if (candidato < 1 || candidato > 4) {
        console.log("Número de candidato inválido!");
        return;
    }
    if (votos[candidato - 1] > 0) {
        votos[candidato - 1]--;
        console.log(`Voto removido para o candidato ${candidato}`);
    } else {
        console.log(`Nenhum voto para remover do candidato ${candidato}`);
    }
}

const atualizar = (Antigocandidato, Novocandidato) => {
    if (Antigocandidato < 1 || Antigocandidato > 4 || Novocandidato < 1 || Novocandidato > 4) {
        console.log("Número de candidato inválido!");
        return;
    }
    remover(Antigocandidato);
    adicionar(Novocandidato);
}

function listar() {
    votos.forEach((votoCount, index) => {
        console.log(`Candidato ${index + 1}: ${votoCount} votos`);
    });
}

module.exports = {
    adicionar,
    remover,
    atualizar,
    listar
};