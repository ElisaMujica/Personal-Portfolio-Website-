const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded',function(){
    console.log('page loaded');

    document.documentElement.style.scrollBehavior = 'smooth';
    
    const visitBtn = document.querySelector('.visit-btn');
    visitBtn.addEventListener('click', () => {
        window.open(visitBtn.dataset.link,'_blank','noopener');
    });
});

document.addEventListener('DOMContentLoaded',function(){

    const socialIcons = document.querySelectorAll('.socials i');
    socialIcons.forEach(icon => {
        icon.addEventListener('click' ,() => {
            window.open(icon.dataset.link,'_blank','noopener');
        });    
    });
});

document.addEventListener('DOMContentLoaded',function(){

    const projectButtons = document.querySelectorAll('[data-link]');
    projectButtons.forEach(button => {
        button.addEventListener('click' ,() => {
            window.open(button.dataset.link,'_blank','noopener');
        });    
    });
});

const contactBtn = document.getElementById("contactBtn")
    contactBtn.addEventListener("click", () => {
        try{
            navigator.clipboard.writeText("elisa.m.mujica@gmail.con")
            alert("Elisa Mujica's email copied to clipboard")
        }catch(error){
            alert("Failed to copy to clipboard")
        }
    })

