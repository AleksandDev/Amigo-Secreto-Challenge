let nomesAmigos = [];

 function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
 }
 exibirTextoNaTela('h1','Amigo Secreto');
 exibirTextoNaTela('h2','Digite o nome dos seus amigos');
 exibirTextoNaTela('ul', '<strong>Sua Lista de Amigos</strong>')

 function adicionarAmigo() {
    let amigo = document.querySelector('input');
    let nomeAmigo = amigo.value;

    if (nomeAmigo.trim() !== "") {
        nomesAmigos.push(nomeAmigo);

        let listaAmigos = document.getElementById("listaAmigos");

        listaAmigos.innerHTML = "";

        for (let i = 0; i < nomesAmigos.length; i++) {
            let novoNome = document.createElement('li');
            novoNome.textContent = nomesAmigos[i];
            listaAmigos.appendChild(novoNome);
        }

        amigo.value = "";
    } else {
        alert("Por favor, insira um nome válido."); 
    }
}

function sortearAmigo() {
    if (nomesAmigos.length === 0) {
        alert("Todos os amigos já foram sorteados!");
        return;
    }

    let listaSorteados = Math.floor(Math.random() * nomesAmigos.length);
    let amigoSorteado = nomesAmigos[listaSorteados];

    nomesAmigos.splice(listaSorteados, 1);

    exibirTextoNaTela('ul', "<strong>Seu amigo secreto é: </strong>" + amigoSorteado);
}

  //O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.