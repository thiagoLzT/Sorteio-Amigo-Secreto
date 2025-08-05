let nomes = [];

function exibirTituloNatela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTituloNatela('h1', 'Sorteio do Amigo Secreto');
exibirTituloNatela('h2', 'Digite o nome dos participantes: (sem limite de participantes)');

function adicionarAmigo() {
    let nomeDigitado = document.getElementById('amigo').value;

    if (nomeDigitado.trim() === '') {
        alert('Digite um nome para criar a sua lista de amigos!');
    } else {
        nomes.push(nomeDigitado);
      
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';
        
        let i = 0;
        while (i < nomes.length) {
            lista.innerHTML += `<li>${nomes[i]}</li>`;
            i++;
        }  
        document.getElementById('amigo').value = '';
        
    }
}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert('Nenhum nome foi adicionado para sortear!');
        return;
    }

    if (nomes.length <2) {
        alert('Para sortear é necessário ter no mínimo 2 participantes!');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nomes.length);
    let nomeSorteado = nomes[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>Parabéns, ${nomeSorteado}! Você foi sorteado(a) como o amigo(a) secreto!</p>`;
}