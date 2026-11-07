const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 10px 30px rgba(62, 44, 35, 0.12)';
    } else {
        header.style.boxShadow = '0 4px 12px rgba(62, 44, 35, 0.06)';
    }
});
