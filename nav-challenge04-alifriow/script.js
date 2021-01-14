const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toogle');

navToggle.addEventListener("click", ()=>{
    nav.classList.toggle("nav--visible");
})