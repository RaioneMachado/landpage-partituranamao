document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        });
    });
    
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efeito de mudança no header ao rolar
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(17, 24, 39, 0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.background = 'rgba(17, 24, 39, 0.8)';
            header.style.boxShadow = 'none';
        }
    });
    
    // Animação GSAP
    gsap.registerEffect({
        name: "fade",
        effect: (targets, config) => {
            return gsap.from(targets, {
                opacity: 0,
                y: 50,
                duration: config.duration,
                ease: "power3.out",
                stagger: config.stagger
            });
        },
        defaults: {duration: 1, stagger: 0.2}
    });
    
    // Aplicar animações
    gsap.effects.fade(".hero-content h2", {duration: 1.5});
    gsap.effects.fade(".hero-content p", {duration: 1.5, stagger: 0.1});
    gsap.effects.fade(".hero-buttons", {duration: 1.5});
    gsap.effects.fade(".sheet-music-card", {duration: 1.5, delay: 0.5});
    
    // Animar elementos ao rolar
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - sectionHeight / 3) {
                const items = section.querySelectorAll('.featured-item, .product-card, .benefit-item, .testimonial-item');
                
                gsap.effects.fade(items, {duration: 0.8, stagger: 0.1});
                
                // Remover o event listener após animar para melhor performance
                window.removeEventListener('scroll', animateOnScroll);
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    
    // Inicializar animações
    animateOnScroll();
    
    // Efeito de digitação no hero (opcional)
    const heroText = document.querySelector('.hero-content p');
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                heroText.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 30);
    }
    
    // Efeito parallax para as luzes de fundo
    window.addEventListener('mousemove', function(e) {
        const lightBeam = document.querySelector('.light-beam');
        const lightBeam2 = document.querySelector('.light-beam-2');
        
        if (lightBeam && lightBeam2) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            lightBeam.style.left = `${x * 100}%`;
            lightBeam.style.top = `${y * 100}%`;
            
            lightBeam2.style.left = `${(1 - x) * 100}%`;
            lightBeam2.style.top = `${(1 - y) * 100}%`;
        }
    });
    
    // Auto-scroll para depoimentos
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    if (testimonialsSlider) {
        let scrollAmount = 0;
        const scrollWidth = testimonialsSlider.scrollWidth - testimonialsSlider.clientWidth;
        
        function autoScroll() {
            if (scrollAmount < scrollWidth) {
                scrollAmount += 1;
                testimonialsSlider.scrollLeft = scrollAmount;
            } else {
                scrollAmount = 0;
                testimonialsSlider.scrollLeft = 0;
            }
        }
        
        let scrollInterval = setInterval(autoScroll, 30);
        
        // Pausar ao passar o mouse
        testimonialsSlider.addEventListener('mouseenter', () => {
            clearInterval(scrollInterval);
        });
        
        // Retomar quando o mouse sair
        testimonialsSlider.addEventListener('mouseleave', () => {
            scrollInterval = setInterval(autoScroll, 30);
        });
    }
});