console.log("this is my shop")

let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = ()=>{
    // console.log('clicked')
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = ()=>{
    // console.log('clicked')
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll =()=>{
    navbar.classList.remove('active');
    search.classList.remove('active');
}


let header = document.querySelector('header');

window.addEventListener('scroll' , ()=>{
    header.classList.toggle('shadow', window.scrollY > 0);
})