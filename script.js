const container = document.querySelector(".container1");
document.querySelector('.scroll-Bar').addEventListener('click', ()=>{
    container.scrollIntoView({behavior:"smooth"});
});