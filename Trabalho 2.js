let listaGrupos = document.querySelector(".migs");

function criarGrupo(grupo) {
    //    servidor
    let nomeGrupo = grupo.nomeGrupo;
    //    servidor
    
//  criando
    let listaG = document.createElement("li");
    let imagem = document.createElement("img");

    imagem.src ="icone%20pessoa.png";

    let aparecerNome = document.createTextNode(nomeGrupo);

    listaG.appendChild(imagem);
    listaGrupos.appendChild(listaG);
    listaG.appendChild(aparecerNome);
    
}
//    requisicao servidor
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            
            let obj_parsed = JSON.parse(xhttp.responseText);

            for (let i = 0; i < obj_parsed.length; i++) {
                criarGrupo(obj_parsed[i]);
                console.log(obj_parsed);
            }
      }
    }
    
xhttp.open('GET', 'http://rest.learncode.academy/api/john/chat', true);
xhttp.send();