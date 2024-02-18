let openShopping = document.querySelector('.shopping');

let closeShopping = document.querySelector('.closeShopping'); 

let list = document.querySelector('.list');

let listCard = document.querySelector('.listCard');

let body = document.querySelector('body');

let total = document.querySelector('.total');

let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{

    body.classList.add('active'); 
    
    })
    
    closeShopping.addEventListener('click', ()=>{
    
    body.classList.remove('active');
    
    })




let products=[

    {
    id:1,
    image:'ph/ph woman4.jpeg',
    name:'SOFT OVERSIZE COAT',
    price:4500,
    quantity:1
    }
    ,

    {
        id:2,
        image:'ph/ph6.webp',
        name:'SOFT OVERSIZE COAT',
        price:800,
        quantity:2
        }

        ,
        
        {
            id:3,
            image:'ph/ph woman2.jpeg',
            name:'SOFT OVERSIZE COAT',
            price:1000,
            quantity:3
            }
            ,
            {
                id:4,
                image:'ph/ph woman3.jpeg',
                name:'SOFT OVERSIZE COAT',
                price:2000,
                quantity:4
                }

    
];
let listCards = [];

function initApp(){
    products.forEach((value,key) =>{
   
     let newDiv =document.createElement('div');
     newDiv.classList.add('item');
     newDiv.innerHTML=`
     <img class="img" src="${value.image}">
     <div class="title"> ${value.name} </div>
     <div class="price"> ${value.price.toLocaleString()} </div>
     
     <button  onclick="addTocard(${key})"> Add </button>`;

     list.appendChild(newDiv);


    })
}
initApp();

function addTocard(key){

    if(listCards[key] == null){
        listCards[key] = products[key]; 
        listCards[key].quantity = 1;
    }
    
    reloadCard();
    
    }
    
    
    function reloadCard(){
    
    listCard.innerHTML = '';
    
    let count = 0;
    
    let totalPrice = 0;
    
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
         count = count + value.quantity;
         if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML =`
            <div><img class="imgg" src="${value.image}">
            <div class="title"> ${value.name} </div>
            <div class="price"> ${value.price.toLocaleString()} </div>
            <button onclick="changeQuantity(${key}, ${value.quantity-1})"> -</button>
            <button onclick="changeQuantity(${key}, ${value.quantity+1})"> +</button>

            </div>

            
            `;
    
    listCard.appendChild(newDiv);
    
         }
    
    total.innerHTML = totalPrice.toLocaleString();
     quantity.innerText =count;
    
    
    })
    
    }
    
    
    function changeQuantity (key, quantity) { 
        if (quantity==0) {
    
             delete listCards[key];
    
    } else {
    
        listCards[key].quantity=quantity; 
        listCards[key].price =quantity* products [key].price;
    }

    
    reloadCard();
}
    
    

