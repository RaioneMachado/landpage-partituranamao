document.addEventListener('DOMContentLoaded', function() {
    // Efeito de hover nos cards
    const instrumentCards = document.querySelectorAll('.instrument-card');
    
    instrumentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const instrument = this.getAttribute('data-instrument');
            const img = this.querySelector('img');
            
            // Adiciona classe de efeito
            this.classList.add('glow-effect');
            
            // Efeito na imagem
            if (img) {
                img.style.transition = 'transform 0.3s ease, filter 0.3s ease';
                img.style.filter = 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.5))';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            
            // Remove classe de efeito
            this.classList.remove('glow-effect');
            
            // Remove efeito na imagem
            if (img) {
                img.style.filter = 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.3))';
            }
        });
        
        // Redirecionamento ao clicar no botão
        const buyBtn = card.querySelector('.btn-buy');
        if (buyBtn) {
            buyBtn.addEventListener('click', function() {
                const instrument = card.getAttribute('data-instrument');
                // Aqui você pode redirecionar para a página específica do instrumento
                // window.location.href = `partituras/${instrument}.html`;
                alert(`Redirecionando para partituras de ${instrument}`);
            });
        }
    });
    
    // Countdown timer
    function updateCountdown() {
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0);
        
        const diff = midnight - now;
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Efeito de digitação no cabeçalho
    const headerText = document.querySelector('.header-content h2');
    if (headerText) {
        const originalText = headerText.textContent;
        headerText.textContent = '';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < originalText.length) {
                headerText.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 50);
    }
    
    // Efeito de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Efeito de parallax
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const lightEffect = document.querySelector('.light-effect');
        const lightEffect2 = document.querySelector('.light-effect-2');
        
        if (lightEffect) {
            lightEffect.style.transform = `translate(${scrollPosition * 0.1}px, ${scrollPosition * 0.1}px)`;
        }
        
        if (lightEffect2) {
            lightEffect2.style.transform = `translate(${scrollPosition * 0.05}px, ${scrollPosition * 0.05}px)`;
        }
    });
    
    // Botão principal CTA
    const mainCTA = document.querySelector('.btn-main');
    if (mainCTA) {
        mainCTA.addEventListener('click', function() {
            document.querySelector('.instrument-grid').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
// Atualizar o contador regressivo da seção em destaque
function updateFeaturedCountdown() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    
    const diff = midnight - now;
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    document.getElementById('featured-hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('featured-minutes').textContent = minutes.toString().padStart(2, '0');
}

updateFeaturedCountdown();
setInterval(updateFeaturedCountdown, 60000);

// Efeito de clique no botão de destaque
const featuredBtn = document.querySelector('.featured-btn');
if (featuredBtn) {
    featuredBtn.addEventListener('click', function() {
        // Efeito visual
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);
        
        // Redirecionamento (substitua pela sua lógica)
        alert('Redirecionando para a página de compra da partitura em destaque!');
        // window.location.href = 'checkout.html?product=featured';
    });
}

// Criar notas musicais dinâmicas
function createMusicalNotes() {
    const notesContainer = document.querySelector('.musical-notes');
    if (!notesContainer) return;
    
    const notes = ['♪', '♫', '♩', '♬', '♭', '♮', '♯'];
    const colors = ['rgba(255, 215, 0, 0.3)', 'rgba(79, 88, 50, 0.3)', 'rgba(255, 107, 107, 0.3)'];
    
    for (let i = 0; i < 15; i++) {
        const note = document.createElement('div');
        note.className = 'note';
        note.textContent = notes[Math.floor(Math.random() * notes.length)];
        note.style.left = `${Math.random() * 100}%`;
        note.style.top = `${Math.random() * 100}%`;
        note.style.fontSize = `${Math.random() * 2 + 1}rem`;
        note.style.color = colors[Math.floor(Math.random() * colors.length)];
        note.style.animationDuration = `${Math.random() * 10 + 10}s`;
        note.style.animationDelay = `${Math.random() * 5}s`;
        
        notesContainer.appendChild(note);
    }
}

createMusicalNotes();