
fetch("productss.json")
 .then(function(response){
  return response.json();
 })

 .then(function(data){
  
  const featured2El = document.querySelector('.featured2');
    for (let index = 0; index < data.length; index++) {
      
    let featuredItemEl = document.createElement('div');
    featuredItemEl.className = "featured-item";
    featuredItemEl.setAttribute('onclick', `details(${data[index].id})`);
    let featuredInfo = `<img src="${data[index].image}" alt="">
    <p>${data[index].name}</p>
    <div class="ratings" style="display: flex;">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
    </div>
    <p id="rit">$${data[index].price}.00</p>`

    featuredItemEl.innerHTML = featuredInfo;
    featured2El.appendChild(featuredItemEl);
    

  };
 })

 function details(id) {
  fetch("productss.json")
 .then(function(response){
  return response.json();
 })

 .then(function(data){
  document.querySelector('.head').style.display = 'none';
  document.querySelector('.featured2').style.display = 'none';
  document.querySelector('.pagination').style.display = 'none';
  document.querySelector('.selected-item').classList.remove('ark');
  document.querySelector('.related-items').classList.remove('ark');
  localStorage.setItem("products", JSON.stringify(data));
  console.log(data[id].id);
  if(!localStorage.getItem("cart")){
    localStorage.setItem("cart", "[]");
  }
  const selectedItemEl = document.querySelector('.selected-item');

  let selectedimgEl = document.createElement('div');
  selectedimgEl.className = "selected-images";
  let selImgInfo = `<img style="" id="largeimg" src="${data[id].image}" alt="">
  <div class="mini-images">
      <img id="miniimg1" class="miniimg" src="images/gallery-1.jpg" alt="">
      <img id="miniimg2" class="miniimg" src="images/gallery-2.jpg" alt="">
      <img id="miniimg3"class="miniimg" src="images/gallery-3.jpg" alt="">
      <img id="miniimg4"class="miniimg" src="images/gallery-4.jpg" alt="">
  </div>`

  selectedimgEl.innerHTML = selImgInfo;
  selectedItemEl.appendChild(selectedimgEl);

  let selectedDetailsEl = document.createElement('div');
  selectedDetailsEl.className = "selected-details";
  let seldetInfo = `<p class="ab">Home / T-Shirt</p>
  <h1>${data[id].name}</h1>
  <h5>$${data[id].price}.00</h5>
  <select name="subject" id="subject2">
      <option value="" selected="selected">Select size</option>
      <option value="">Small</option>
      <option value="">Medium</option>
      <option value="">Large</option>
  </select> 
  <div class="mini-sub">
      <select name="subject" id="subject3">
          <option id="opt1" value="1" selected="selected">1</option>
          <option id="opt2" value="2">2</option>
          <option id="opt3" value="3">3</option>
          <option id="opt4" value="4">4</option>
          <option id="opt5" value="5">5</option>
          <option id="opt6" value="6">6</option>
          <option id="opt7" value="7">7</option>
          <option id="opt8" value="8">8</option>
          <option id="opt9" value="9">9</option>
          <option id="opt10" value="10">10</option>
      </select> 
      <button class="AddCart">Add to Cart</button>
  </div>
  <h5>PRODUCT DETAILS</h5>
  <p class="bc">Give your Summer Wardrobe a style upgrade with the HRX Men's Active T-Shirt. 
      Team it with a pair of shorts for your morning workout or a denims for an evening out with the guys</p>
      <i class=" effect fa-solid fa-arrow-left fa-beat " onclick="leave()"></i>

      
       
`



selectedDetailsEl.innerHTML = seldetInfo;
selectedItemEl.appendChild(selectedDetailsEl);

let AddCartEl = document.querySelector('.AddCart');
AddCartEl.setAttribute('onclick', `astro(${data[id].id})`)

const largeimgEl = document.getElementById('largeimg');

document.getElementById('miniimg1').addEventListener('click', ()=>{
  largeimgEl.src="images/gallery-1.jpg";
})
  
document.getElementById('miniimg2').addEventListener('click', ()=>{
  largeimgEl.src="images/gallery-2.jpg";
})
document.getElementById('miniimg3').addEventListener('click', ()=>{
  largeimgEl.src="images/gallery-3.jpg";
})
document.getElementById('miniimg4').addEventListener('click', ()=>{
  largeimgEl.src="images/gallery-4.jpg";
})


});

// let abcd = document.querySelector('.effect');

// abcd.addEventListener('click', ()=>{  
  
// })
}

function leave() {
  // window.location = "products.html";
  location.reload();
}

 let products = JSON.parse(localStorage.getItem("products"));
 let cart = JSON.parse(localStorage.getItem("cart"));

 function addItemToCart(productId) {
  let product = products.find(function(product){
    return product.id == productId;
  })
  
  if (cart.length == 0) {
    cart.push(product);
  } else{
    let res = cart.find(element => element.id === productId);
    if (res === undefined) {
      cart.push(product)
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();

 }

 function removeItemFromCart(productId) {
  let cart= JSON.parse(localStorage.getItem("cart"))
  console.log(productId);

     cart.splice(productId, 1); 


    
    localStorage.setItem("cart", JSON.stringify(cart));
  

  // let temp = cart.filter(item => item.id != productId);
  // localStorage.setItem('cart', JSON.stringify(temp));
  location.reload();
 }

 function getTotal() {
  let temp = cart.map(function (item) {
    return parseFloat(item.price);
  });

  let sum = temp.reduce(function(prev, next){
    return prev + next;
  }, 0);
  console.log(sum);
}

function updateQuantity(productId, quantity) {
  for(let product of cart){
    if(product.id == productId){
      product.quantity = quantity;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

function astro(id){
  addItemToCart(id);
  let selectedOptionEl = document.getElementById('subject3').value;
  updateQuantity(id, selectedOptionEl);

}

 getTotal();


 function remover(id){
  removeItemFromCart(id);
   }

function selecter(id) {
  alert("Kindly Go back to the products Page to update the quantity selected for this Item.")
}


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-74px";
  }
  prevScrollpos = currentScrollPos;
}



  
  

  const oneEll = document.querySelector('.one');
  const twoEll = document.querySelector('.two');
  const threeEll = document.querySelector('.three');
  const fourEll = document.querySelector('.four');
  const nextEll = document.querySelector('.next');

 let randVal = 1;
  function oneEl(){
    document.querySelector('.one').classList.add('active');
    twoEll.classList.remove('active');
    threeEll.classList.remove('active');
    fourEll.classList.remove('active');
    randVal = 1;
  }

  function twoEl(){
    twoEll.classList.add('active');
    oneEll.classList.remove('active');
    threeEll.classList.remove('active');
    fourEll.classList.remove('active');
    randVal = 2;

  }
  function threeEl(){
    threeEll.classList.add('active');
    twoEll.classList.remove('active');
    oneEll.classList.remove('active');
    fourEll.classList.remove('active');
    randVal = 3;

  }
 function fourEl(){
  fourEll.classList.add('active');
    twoEll.classList.remove('active');
    threeEll.classList.remove('active');
    oneEll.classList.remove('active');
    randVal = 4;
 }

 const pagesEl = document.querySelectorAll('.page');


 let jiggy1 = document.querySelectorAll('.front');

for (let index = 0; index < jiggy1.length; index++) {
  jiggy1[index].setAttribute(`onclick`, `front(${index})`);
}


function front(id) {
  console.log("working");
  window.location = "products.html";
}

  
function nextEl(){
  // pagesEl.forEach(element => {
  //     if(element.classList.contains('active')){
  //       element.click();
  //     }
  if(randVal === 5){
    randVal = 1;
  }
  console.log(randVal);

  if (randVal===1) {
    twoEll.classList.add('active');
    oneEll.classList.remove('active');
    threeEll.classList.remove('active');
    fourEll.classList.remove('active');
  }
    if (randVal===2) {
      threeEll.classList.add('active');
    twoEll.classList.remove('active');
    oneEll.classList.remove('active');
    fourEll.classList.remove('active');
    }

    if(randVal===3){
      fourEll.classList.add('active');
    twoEll.classList.remove('active');
    threeEll.classList.remove('active');
    oneEll.classList.remove('active');
    }

    if(randVal===4){
      document.querySelector('.one').classList.add('active');
    twoEll.classList.remove('active');
    threeEll.classList.remove('active');
    fourEll.classList.remove('active');
    }
    randVal++;
}



 let outputArr = JSON.parse(localStorage.getItem("cart"));

 outputArr.forEach(element => {
   let itemContainerEl = document.createElement('div');
   itemContainerEl.className = "itemContainer";
   let itemContainerinfo = `<div class="sub1">
   <img src="${element.image}" style ="width:100px; height:90px;" alt="">

    <div class="sub2">
        <p style="opacity: 0.9;"><b>${element.name}</b></p>
        <p>Price: $${element.price}.00</p>
        <button class="removebutton" id="removebutton">Remove</button>
        
    </div>
   </div>
   <p name="subject" id="subject4" class="subject4 qua">
          ${element.quantity}
      </p>
      <h5 class="totals" >$${element.price*element.quantity}.00</h5>
  


   `
   ;



   itemContainerEl.innerHTML = itemContainerinfo;
   document.querySelector('.cart-output').appendChild(itemContainerEl);

   
 });


 let button2El = document.querySelectorAll('.removebutton');
//  button2El.setAttribute('onclick', `remover(${element.id})`);
let addit = 0;
 button2El.forEach(element => {
  element.setAttribute('onclick', `remover(${addit})`);
  addit++;
  
 });

//  let selecEl = document.querySelectorAll('.subject4');
//  let addit2 = 0;
//  selecEl.forEach(element => {
  
//  });



function namer() {
  const itemContainerEl = document.querySelectorAll('.itemContainer');
  const tselect = document.querySelectorAll('.subject4');
  
  let neew = [];
   
   for (let index = 0; index < tselect.length; index++) {
    let outputArr = JSON.parse(localStorage.getItem("cart"));
    
    //  const tselect = document.querySelectorAll('.subject4');
     tselect[index].value = outputArr[index].quantity;
     console.log(outputArr[index].quantity);
  
     neew.push(outputArr[index].quantity*outputArr[index].price)

     tselect[index].setAttribute(`onclick`, `selecter(${index})`);

     
  
     }
    console.log(neew);
    const initialValue = 0;
    const sumWithInitial = neew.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);









  const totalEl = document.createElement('div');
totalEl.className = "total";
let totalinfo = `<div class="total-container">
<div class="encompass">
<div class="brack">
<div>
<h5>subtotal</h5>
</div><div class="h5">
<h5>$${parseFloat(sumWithInitial)}.0<h5>
</div>
</div>
<div class="brack">
<div>
<h5>Tax</h5>
</div><div class="h5">
<h5 >$${sumWithInitial * 0.1}<h5>
</div>
</div>
<div class="brack">
<div>
<h5>Total</h5>
</div><div class="h5">
<h5 >$${parseFloat((sumWithInitial * 0.1) + sumWithInitial) }<h5>
</div>
</div>
<button><b>Proceed to checkout <i class="fa-solid fa-arrow-right fa-beat"></i></b></button>
</div>
</div>`;

totalEl.innerHTML = totalinfo;
document.querySelector('.cart-output').appendChild(totalEl);
console.log("luverr");
}

namer();
 
 function cartEl(){
  window.location = "cart.html";
 }

window.addEventListener("load", ()=>{ 
  
  
  });


  const totalsEl = document.querySelectorAll('.totals');

   function getTotall() {
    let temp = totalsEl.map(function (item) {
      return parseFloat(item);
    });
  
    let sum = temp.reduce(function(prev, next){
      return prev + next;
    }, 0);
    console.log(sum);
  }

  getTotall();
  

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "mynavbar") {
      x.className += " responsive";
    } else {
      x.className = "mynavbar";
    }
    x.style.flexDirection = "column";
    

  }
  let jiggy = document.querySelectorAll('.front');

for (let index = 0; index < jiggy.length; index++) {
  console.log("working");

  jiggy[index].setAttribute(`onclick`, `front(${index})`);
  console.log("working");
  
}


function front(id) {
  console.log("working");
  window.location = "products.html";
}