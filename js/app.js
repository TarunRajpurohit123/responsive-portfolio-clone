
// get access of elements from html
const hamburder = document.getElementById('ham');
const mobileNav = document.getElementById('mobile-nav');
const closeBtn = document.getElementById('close'); 

// when click on hamburger
hamburder.addEventListener('click',()=>{
  mobileNav.style.transform = 'translate(0%)';
});

// when click on close button
closeBtn.addEventListener('click',()=>{
  mobileNav.style.transform = 'translate(-100%)';
})