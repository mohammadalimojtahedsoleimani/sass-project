const hamburgerMenu = document.querySelector(".hamburger-menu");
const navBarItem = document.querySelector(".navbar__item")

hamburgerMenu.addEventListener("click",()=>{
    hamburgerMenu.classList.toggle("is_active")
    navBarItem.classList.toggle("active")
    console.log (navBarItem.classList)
});
