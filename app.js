let amigos = [];

function adicionarAmigo(){
    let nome = document.getElementById('amigo').value;
    if (nome){
        amigos.push(nome);

        document.getElementById('amigo').value = '';

        console.log(amigos);
    } else {
        alert('Por favor, insira um nome válido')
    }

}



