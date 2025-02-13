let listaDeAmigos = [];


//Adiciona os nomes no array
function adicionarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if(amigo == ''){
        alert('Por favor insira um nome!');
    }else{
        listaDeAmigos.push(amigo);    
        document.getElementById('amigo').value = '';
        atualizarLista();
    }
}

function atualizarLista(){
    let listarAmigos = document.getElementById('listaAmigos');
    listarAmigos.innerHTML = '';
    for(let i = 0; i < listaDeAmigos.length; i++){
        let itemLista = document.createElement('li');
        itemLista.innerHTML = listaDeAmigos[i];
        listarAmigos.appendChild(itemLista);
        
    }
}

function sortearAmigo(){

    if(listaDeAmigos.length == ''){
        alert('insira pelo menos 2 nomes');
    }
    let numero = Math.floor(Math.random()*listaDeAmigos.length+1);
    let amigoSorteado = listaDeAmigos[numero-1];
    document.getElementById('resultado').innerHTML =`Seu amigo secreto é ${amigoSorteado}`
}

