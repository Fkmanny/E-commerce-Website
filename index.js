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

document.querySelector('.abc').addEventListener('click', ()=>{
  window.open("subpage.html");

 })

