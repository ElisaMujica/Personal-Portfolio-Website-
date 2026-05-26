const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

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
            navigator.clipboard.writeText("elisa.m.mujica@gmail.com")
            alert("Elisa Mujica's email copied to clipboard")
        }catch(error){
            alert("Failed to copy to clipboard")
        }
    })

const form = document.querySelector('form');
const successMessage =
document.getElementById('success-message');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    try {
        await fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type':
                'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(formData).toString()
        });
        successMessage.innerText =
        'Thanks! I will contact you soon.';
        form.reset();
    } catch (error) {
        successMessage.innerText =
        'Something went wrong.';
    }
});


