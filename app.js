let amigos = [];

function adicionarAmigo(){
    let nome = document.getElementById('amigo').value;
    if (nome){
        amigos.push(nome);
        document.getElementById('amigo').value = '';
        mostrarAmigos();
        console.log(amigos);
    } else {
        alert('Por favor, insira um nome válido')
    }

}

function mostrarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    amigos.forEach(function(amigo){
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });

}



