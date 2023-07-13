//Como criar os cards de produto com base nas informações disponiveis no array de objetos - ok

/* 
<li id="p_1">
    <img src="./img/supra.jpg"/>
    <p>Toyota Supra 1998</p>
    <button id="car_1" class="productButton">Favoritar</button>
</li>   
{
    id: 2,
    modelo: 'Skyline',
    ano: 1997,
    marca: 'Nissan',
    imagem: './img/skyline.webp'
},

*/
let count_fav = 0;

function renderProductCards(lista){
    const listaProdutos = document.querySelector("#listaProdutos");
    for(let i = 0; i < lista.length ; i++){
        const carro = lista[i]; 

        // 1. Criando os elementos
        let li = document.createElement('li');
        let img = document.createElement('img');
        let p = document.createElement('p');
        let button = document.createElement('button');
        
        // 2. Configurar os elementos
        li.id = `p_${carro.id}`;
        img.src = carro.imagem;
        img.alt = carro.modelo;
        p.innerText = `${carro.marca} ${carro.modelo} ${carro.ano}`
        button.innerText = 'FAVORITAR';
        button.id = `btn_${carro.id}`

        button.addEventListener('click', function(event){
        
            let id = event.target.id.substring(4);
            const car = searchCar(id);

            if(!verificarExistenciaDoCard(id)){
                count_fav++;
                document.querySelector('#favQuantidade').innerText = `(${count_fav})`;
                createFavoriteCard(car);
            }
        })


        // 3. Montar a hierarquia interna dos elementos
        li.append(img, p, button);

        // 4. Adicionar os elementos criados em um elemento já existente na página
        listaProdutos.appendChild(li);
    }
}

renderProductCards(carros);

function createFavoriteCard(carro){
    const listaFavoritos = document.querySelector('#listaFavoritos');
    // 1. Criando os elementos
    let li = document.createElement('li');
    let img = document.createElement('img');
    let p = document.createElement('p');
    let button = document.createElement('button');
    
    // 2. Configurar os elementos
    li.id = `f_${carro.id}`;
    img.src = carro.imagem;
    img.alt = carro.modelo;
    p.innerText = `${carro.marca} ${carro.modelo} ${carro.ano}`
    button.innerText = 'REMOVER';
    button.id = `fav_${carro.id}`;

    button.addEventListener('click' , function(){
        
        let confirmar = confirm('Você tem certeza que deseja remover da lista?');
        
        if(confirmar){
            count_fav--;
            document.querySelector('#favQuantidade').innerText = `(${count_fav})`;
    
            // event.composedPath()[1].remove();
            li.style.opacity = '0'
    
            li.remove()
    
            // setTimeout(function(){
            //     li.remove()
            // }, 1800);

        }

    })


    // 3. Montar a hierarquia interna dos elementos
    li.append(img, p, button);

    // 4. Adicionar os elementos criados em um elemento já existente na página
    listaFavoritos.appendChild(li);
}

function searchCar(id){
    // Retornar o objeto que possui esse id
    for(let i = 0; i<carros.length ; i++){
        if(carros[i].id == id){
            return carros[i];
        }
    }
    return {};
}


function verificarExistenciaDoCard(id){
    let card = document.querySelector(`#f_${id}`);
    if(card == null){
        return false;
    }
    return true; 
}

