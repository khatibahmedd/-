
let list = document.querySelector('.list');


let Payment = document.querySelector('.payment');

let close = document.querySelector('.close');



let products=[

    {
    id:1,
    image:'ph/ph5.jpeg',
    name:'SOFT OVERSIZE COAT',
    price:4500,
    quantity:1
    }
    ,

    {
        id:2,
        image:'ph/ph7.webp',
        name:'SOFT OVERSIZE COAT',
        price:800,
        quantity:2
        }

        ,
        
        {
            id:3,
            image:'ph/ph8.webp',
            name:'SOFT OVERSIZE COAT',
            price:1000,
            quantity:3
            }
            ,
            {
                id:4,
                image:'ph/ph9.webp',
                name:'SOFT OVERSIZE COAT',
                price:2000,
                quantity:4
                }

    
];
let listCards =[];

function initApp(){
    products.forEach((value,key)=> {
    //   frst DOM
     let newDiv =document.createElement('div');
     newDiv.classList.add('item');
     newDiv.innerHTML=`
     <img class="img" src="${value.image}">
     <div class="title"> ${value.name} </div>
     <div class="price"> ${value.price} </div>
     <div class="quantity"> ${value.quantity} </div>
     <button class="payBtn"  onclick="addTocart"> buy </button>
    
     `

     list.appendChild(newDiv);


    })
}
initApp();
let productBtn =document.querySelector(".payBtn")

productBtn.addEventListener('click',()=>{
    Payment.style.display="flex";
}
)

close.addEventListener('click',()=>{
    Payment.style.display="none";
}
)