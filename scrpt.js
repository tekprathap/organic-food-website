
var menucard=document.querySelector('#menu-cardtop');
var mwnulist=document.querySelector('.lst');

menucard.addEventListener('click',()=>{
    mwnulist.classList.toggle('activecard')
})

// cart remove
var addcard=document.querySelector('#addtocard')
var cart=document.querySelector('.cart');
var carremoe=document.querySelector('#cart-close');

addcard.addEventListener('click',()=>
    cart.classList.add('caractive')
)
carremoe.addEventListener('click',()=>
    cart.classList.remove('caractive')
)


// cart qty increase


document.addEventListener('DOMContentLoaded',loadfood)
function loadfood() {
    loadcontainer()
}
// loadcontainer
function loadcontainer() {
    var cartremove=document.querySelectorAll('.deletbtn');

cartremove.forEach((btn2) => {
    btn2.addEventListener('click',removeitem)
});

var valueincresw=document.querySelectorAll('.cart-quantity');
valueincresw.forEach((input) => {
    input.addEventListener('change',Qtychangevalue)
});

var addtocard=document.querySelectorAll('#addtocard')
addtocard.forEach((btn3) => {
    btn3.addEventListener('click',selectcard)
});
updateTotal()
}


function removeitem(){
    if(confirm('Are Your Sure to Remove')){
        let title=this.parentElement.querySelector('.cart-food-title').innerHTML;
        itemList=itemList.filter(el=>el.title!=title);
        this.parentElement.remove();
        loadContent();
}
}

function Qtychangevalue() {
    if (isNaN(this.value) || this.value<1) {
        this.value=1
    }
    loadcontainer()
} 
let itemList=[];
function selectcard() {
    let food=this.parentElement;
    let title=food.querySelector('.producttitle').innerHTML;
    let price=food.querySelector('.productprice').innerHTML;
    let imgSrc=food.querySelector('.imgcard').src;
    console.log(imgSrc);
    // console.log(imgcard,productitle,productprice)
    // item list
    let newProduct={title,price,imgSrc}

    //Check Product already Exist in Cart
    if(itemList.find((el)=>el.title==newProduct.title)){
     alert("Product Already added in Cart");
     return;
    }else{
     itemList.push(newProduct);
    }
   
    let newelement= updatelement(title,price,imgSrc)
    let newcreate=document.createElement('div');
    newcreate.innerHTML=newelement
    let cartconut=document.querySelector('.cart-content');
    cartconut.append(newcreate)
    loadcontainer()
}

function updatelement(title,price,imgSrc) {
    return `     <div class="cart-box">
        <img src="${imgSrc}" class="cart-img">
    <div class="detail-box">
      <div class="cart-food-title">${title}</div>
      <div class="price-box">
        <div class="cart-price">${price}</div>
         <div class="cart-amt">${price}</div>
     </div>
      <input type="number" value="1" class="cart-quantity">
    </div>
     <i class="fa-solid fa-trash-can deletbtn" ></i>
  </div>`
}

var  deete =document.querySelectorAll('#delete');

deete.forEach((det) => {
    det.addEventListener('click',deetel)
});

function deetel() {
this.parentElement.remove()
}


function updateTotal()
{
  const cartItems=document.querySelectorAll('.cart-box');
  const totalValue=document.querySelector('.total-price');

  let total=0;

  cartItems.forEach(product=>{
    let priceElement=product.querySelector('.cart-price');
    let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
    let qty=product.querySelector('.cart-quantity').value;
    total+=(price*qty);
    product.querySelector('.cart-amt').innerText="Rs."+(price*qty);

  });

  totalValue.innerHTML='Rs.'+total;


  // Add Product Count in Cart Icon

 


}



