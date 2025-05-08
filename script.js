// Substitua o código atual do menu-toggle por este:
document.querySelector('.menu-toggle').addEventListener('click', () => {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
    
    // Mudar o ícone do botão
    const icon = document.querySelector('.menu-toggle i');
    if (nav.classList.contains('show')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Fechar o menu ao clicar em um link (para mobile)
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            const nav = document.querySelector('nav ul');
            nav.classList.remove('show');
            document.querySelector('.menu-toggle i').classList.remove('fa-times');
            document.querySelector('.menu-toggle i').classList.add('fa-bars');
        }
    });
});
// Scroll Suave para Links Internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito de Reveal ao Scroll
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.service');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}