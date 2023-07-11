const todosButtons = document.querySelectorAll('button');
const listaCarrinho = document.querySelector('#lista-carrinho');

console.log(todosButtons);

for(let i = 0; i<todosButtons.length ; i++){
    const botao = todosButtons[i];
    
    botao.addEventListener('click', function(event){
        const divPai = event.target.parentElement;
        // const divPai = event.composedPath()[1];        

        const nomeProduto = divPai.children[0].innerText;
        
        const li = document.createElement('li');
        li.innerText = nomeProduto;

        li.addEventListener('click', function(e){
            alert('Você clicou no elemento ' + e.target.innerText )
        })
    
        listaCarrinho.append(li);
    })
}