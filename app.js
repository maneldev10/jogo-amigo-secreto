// Lista de amigos armazenada no array
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, digite um nome!");
        return;
    }

    amigos.push(nomeAmigo);
    document.getElementById('amigo').value = "";
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na página
function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert("Não há amigos para sortear!");
        return;
    }

    // Gera um índice aleatório entre 0 e a quantidade de amigos
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Seleciona o nome do amigo aleatório
    let amigoSorteado = amigos[indiceAleatorio];

    // Exibe o nome do amigo sorteado
    document.getElementById('resultado').innerHTML = `<p>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></p>`;
}

function reiniciarJogo() {
    // Limpa o array de amigos
    amigos = [];

    // Limpa a lista exibida
    document.getElementById('listaAmigos').innerHTML = "";

    // Limpa o resultado do sorteio
    document.getElementById('resultado').innerHTML = "";

    // Opcional: Foca no campo de texto para começar a adicionar novamente
    document.getElementById('amigo').focus();

    // Informa que o jogo foi reiniciado
    alert("O jogo foi reiniciado! Você pode adicionar novos amigos.");
}