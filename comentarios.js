// Declarar um array vazio
const comments=[];

// Declarando a função para adicionar o produto
function addComment() {
    const commentPoster=document.getElementById('comment-poster').value;
    const commentContent=document.getElementById('comment-content').value;
    /* Verificar se os campos estão preenchidos corretamente */
    if (commentPoster && commentContent) {
        /* Neste bloco vamos criar um objeto product, para receber a chave e o valor */
        const comment={
            name: commentPoster,
            content: commentContent            
        };
        // metodo push para incluir os dados do produto na lista
        comments.push(comment);
        //atualizar o array com a lista de produtos
        displayComments();
        //Limpar os campos de entrada;
        document.getElementById('comment-poster').value="";
        document.getElementById('comment-content').value="";
    }
}

// Criar função para adicionar os produtos e organizar na tabela
function displayComments(){
    const commentList=document.getElementById('comment-list');
    commentList.innerHTML= ""; //exibir no html
    //incluir linha / duas celula na tabela
    comments.forEach(function(comment){
        const row= commentList.insertRow();
        
        const cell1=row.insertCell(0);
        cell1.innerHTML= `<b>"${comment.name}" disse:</b>` // acessando o objeto nome do produto

        const cell2=row.insertCell(1);
        cell2.innerHTML= `"<i>${comment.content}</i>"` // acessando o objeto preco do produto
    });
}
// Capturando o formulário de cadastro:
const commentForm= document.getElementById('comment-form');
// Adicionando um "escutador de evento dinamicamente"
commentForm.addEventListener('submit', function(e) {
    e.preventDefault(); // previne o recarregamento automático da página
    addComment();
});