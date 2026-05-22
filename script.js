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

    const projectButtons = document.querySelectorAll('.btn');
    projectButtons.forEach(button => {
        button.addEventListener('click' ,() => {
            window.open(button.dataset.link,'_blank','noopener');
        });    
    });
});
