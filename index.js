function publicar (){
    //Pegando info da postagem
    var nome = document.getElementById("nome").value;
    var text = document.getElementById("text").value;
    var data = new Date();
    var horario = data.toString();

    //Pegando a div de Cometários
    var comentarios = document.getElementById("postagens")



    //Cria tag "P" mostrando a hora atual da postagem
    var tagP_Horario = document.createElement("p");
    tagP_Horario.innerHTML = horario;

    //Cria uma tag Strong para nome do usuário
    var tagStrong = document.createElement("strong");
    tagStrong.innerHTML = nome;
    
    //Cria umaa tag p para mostrar os comentários
    var tagP_comentario = document.createElement("p");
    tagP_comentario.innerHTML = text;

    //Criando div para mostrar os comentários
    var tagDiv_postagem = document.createElement("div");
    tagDiv_postagem.className = "Comentarios";

    //Adicionando elementos filhos
    tagDiv_postagem.appendChild(tagP_Horario);
    tagDiv_postagem.appendChild(tagStrong);
    tagDiv_postagem.appendChild(tagP_comentario);

    //Adicionando o comentário nas postagens
    comentarios.appendChild(tagDiv_postagem)
}