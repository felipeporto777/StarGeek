var listaFilmes = []
listaFilmes = JSON.parse(localStorage.getItem('bdFilmes'))
if (listaFilmes == null) {
    listaFilmes = []
}

function enviar() {
    if(document.getElementById("titulo").value == '' || document.getElementById("sinopse").value == '' || document.getElementById("linkImg").value == ''){
        alert("preencha todos os campos")
        return
    }

     var cadastro = {
        titulo: document.getElementById("titulo").value,
        sinopse: document.getElementById("sinopse").value,
        linkImg: document.getElementById("linkImg").value
     }
     listaFilmes.push(cadastro)
     localStorage.setItem('bdFilmes', JSON.stringify(listaFilmes))
     alert('Mídia cadastrada com sucesso')
     location.href = "Catalogo.html"
}

function linkImg(){
    document.getElementById("imagem").src = document.getElementById("linkImg").value
}
function exibirCatalogo(){
    listaFilmes.forEach(item => {
        document.getElementById("novosFilmes").innerHTML += `<img class="vinicius" src="${item.linkImg}" class=''>`
    })
}

function exibirCadastrados(){
    document.getElementById("cadastrados").innerHTML = ""
    listaFilmes.forEach((item,pos)=>{
       document.getElementById('cadastrados').innerHTML += 
       `<div>
       Mídia: ${item.titulo}
       <img src="img/excluir.svg" onclick='excluir(${pos})'>
       </div>` 
    })
}

function excluir(item){
    if(confirm('Deseja realmente excluir essa midia?')){
        listaFilmes.splice(item, 1)
        localStorage.setItem('bdFilmes', JSON.stringify(listaFilmes))
        exibirCadastrados()
    }
}