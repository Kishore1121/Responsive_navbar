let button=document.querySelector(".arrow"),
    link=document.querySelector(".nav-links");
button.addEventListener("click",()=>{
        link.classList.toggle("display");
})