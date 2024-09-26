let menuNavbar = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menuNavbar.onclick = () =>{
    menuNavbar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchIcon.classList.remove('fa-times');
    searchForm.classList.remove("active");
}

let searchIcon = document.querySelector("#search-icon");
let searchForm = document.querySelector(".search-form");

searchIcon.onclick = () =>{
    menuNavbar.classList.remove('fa-times');
    navbar.classList.remove('active');
    searchIcon.classList.toggle('fa-times');
    searchForm.classList.toggle("active");  
}
window.onscroll = () =>{
    menuNavbar.classList.remove('fa-times');
    navbar.classList.remove('active');
    searchIcon.classList.remove('fa-times');
    searchForm.classList.remove("active");
}