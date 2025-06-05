document.addEventListener('DOMContentLoaded', function() {
    // Efeito de hover nos cards
    const instrumentCards = document.querySelectorAll('.instrument-card');
    
    instrumentCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
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
    
    // Efeito de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
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

    // Atualizar o contador regressivo da seção em destaque
    function updateFeaturedCountdown() {
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0);
        
        const diff = midnight - now;
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        const featuredHours = document.getElementById('featured-hours');
        const featuredMinutes = document.getElementById('featured-minutes');
        
        if (featuredHours) featuredHours.textContent = hours.toString().padStart(2, '0');
        if (featuredMinutes) featuredMinutes.textContent = minutes.toString().padStart(2, '0');
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
            
            // Redirecionamento
            alert('Redirecionando para a página de compra da partitura em destaque!');
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

    // Animação 3D dos instrumentos
    function animate3dInstruments() {
        const instruments = document.querySelectorAll('.instrument-3d');
        if (!instruments.length) return;
        
        let mouseX = 0;
        let mouseY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth) - 0.5;
            mouseY = (e.clientY / window.innerHeight) - 0.5;
        });
        
        function updateInstruments() {
            instruments.forEach(instrument => {
                const instrumentType = instrument.getAttribute('data-instrument');
                let rotateX, rotateY;
                
                switch(instrumentType) {
                    case 'flauta':
                        rotateX = mouseY * 20;
                        rotateY = mouseX * 20;
                        instrument.style.transform = `rotateY(${20 + rotateY}deg) rotateZ(${-10 + rotateX}deg)`;
                        break;
                    case 'violino':
                        rotateX = mouseY * 20;
                        rotateY = mouseX * 20;
                        instrument.style.transform = `rotateY(${-20 + rotateY}deg) rotateZ(${10 + rotateX}deg)`;
                        break;
                    case 'trompete':
                        rotateX = mouseY * 20;
                        rotateY = mouseX * 20;
                        instrument.style.transform = `rotateY(${20 + rotateY}deg) rotateZ(${10 + rotateX}deg)`;
                        break;
                    case 'violoncelo':
                        rotateX = mouseY * 20;
                        rotateY = mouseX * 20;
                        instrument.style.transform = `rotateY(${-20 + rotateY}deg) rotateZ(${-10 + rotateX}deg)`;
                        break;
                }
            });
            
            requestAnimationFrame(updateInstruments);
        }
        
        updateInstruments();
    }

    animate3dInstruments();

    // Efeito de clique no botão do pacote
    const orchestraBtn = document.querySelector('.orchestra-btn');
    if (orchestraBtn) {
        orchestraBtn.addEventListener('click', function() {
            // Efeito de clique
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
            
            // Efeito de confete
            createConfetti();
            
            // Redirecionamento
            setTimeout(() => {
                alert('Redirecionando para a página de compra do Pacote Orquestral!');
            }, 1000);
        });
    }

    // Efeito de confete
    function createConfetti() {
        const colors = ['#4F5832', '#FFD700', '#FF6B6B', '#ffffff'];
        const container = document.querySelector('.orchestra-section');
        if (!container) return;
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confetti.style.width = `${Math.random() * 10 + 5}px`;
            confetti.style.height = `${Math.random() * 10 + 5}px`;
            confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
            
            container.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
    }

    // Adicionar estilos dinâmicos para o confetti
    const style = document.createElement('style');
    style.textContent = `
        .confetti {
            position: absolute;
            width: 10px;
            height: 10px;
            animation: confetti-fall linear forwards;
            z-index: 10;
        }
        
        @keyframes confetti-fall {
            0% {
                top: -10px;
                opacity: 1;
            }
            100% {
                top: 100%;
                opacity: 0;
                transform: rotate(720deg) translateX(50px);
            }
        }
    `;
    document.head.appendChild(style);

    // Scroll suave para os instrumentos incluídos
    const scrollHint = document.querySelector('.orchestra-scroll-hint');
    if (scrollHint) {
        scrollHint.addEventListener('click', function() {
            const target = document.querySelector('.instruments-included');
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('survey-form');
    const successMessage = document.getElementById('success-message');
    const reasonGroup = document.getElementById('reason-group');
    const submitBtn = form.querySelector('.download-btn');

    // 1. MOSTRAR/OCULTAR MOTIVO SE ESCOLHER "não vou comprar"
    document.querySelectorAll('input[name="entry.1465811703"]').forEach(radio => {
        radio.addEventListener('change', function () {
            const show = this.value === 'não vou comprar desta vez';
            reasonGroup.style.display = show ? 'block' : 'none';

            if (!show) {
                document.querySelectorAll('input[name="entry.920632076"]').forEach(r => r.checked = false);
                const otherInput = document.querySelector('input[name="entry.920632076.other_option_response"]');
                if (otherInput) otherInput.value = '';
            }
        });
    });

    // 2. LÓGICA PARA CAMPO "Outro"
    document.querySelectorAll('.other-input').forEach(input => {
        const associatedRadio = input.closest('.other-option').querySelector('input[type="radio"]');

        input.addEventListener('input', function () {
            if (this.value.trim() !== '') {
                associatedRadio.checked = true;
                associatedRadio.value = this.value;
            }
        });

        input.addEventListener('blur', function () {
            associatedRadio.value = this.value || "Outro";
        });
    });

    // 3. ENVIO DO FORMULÁRIO
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const mainChoice = document.querySelector('input[name="entry.1465811703"]:checked');

        if (!name || !email || !mainChoice) {
            alert('Por favor, preencha pelo menos seu nome, e-mail e selecione uma opção.');
            return;
        }

        if (mainChoice.value === 'não vou comprar desta vez') {
            const reasonSelected = document.querySelector('input[name="entry.920632076"]:checked');
            if (!reasonSelected) {
                alert('Por favor, selecione o motivo.');
                return;
            }
        }

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Enviando...</span><i class="fas fa-spinner fa-spin"></i>';

        // Envia via iframe (Google Forms)
        form.submit();

        // Exibe mensagem de sucesso e download
        setTimeout(() => {
            form.style.display = 'none';
            successMessage.style.display = 'block';
            successMessage.scrollIntoView({ behavior: 'smooth' });

            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>Liberar Download</span><i class="fas fa-download"></i>';
        }, 1500);
    });

    // 4. SALVA DADOS NO LOCALSTORAGE ANTES DE RECARREGAR
    window.addEventListener('beforeunload', function () {
        const formInputs = Array.from(form.elements).filter(el => el.name);
        const formState = {};

        formInputs.forEach(input => {
            if (input.type === 'radio' || input.type === 'checkbox') {
                if (input.checked) formState[input.name] = input.value;
            } else {
                formState[input.name] = input.value;
            }
        });

        localStorage.setItem('formBackup', JSON.stringify(formState));
    });

    // 5. RECUPERA DADOS SALVOS AO CARREGAR A PÁGINA
    const savedData = localStorage.getItem('formBackup');
    if (savedData) {
        const formState = JSON.parse(savedData);
        Object.keys(formState).forEach(name => {
            const input = form.querySelectorAll(`[name="${name}"]`);
            input.forEach(el => {
                if (el.type === 'radio' || el.type === 'checkbox') {
                    if (el.value === formState[name]) el.checked = true;
                } else {
                    el.value = formState[name];
                }
            });
        });

        // Reexibe motivo, se necessário
        const mainChoice = document.querySelector('input[name="entry.1465811703"]:checked');
        if (mainChoice && mainChoice.value === 'não vou comprar desta vez') {
            reasonGroup.style.display = 'block';
        }
    }
});
    // Inicializa o contador quando a página carrega
    document.addEventListener('DOMContentLoaded', function() {
        // Verifica se já existe um contador no localStorage
        if(localStorage.getItem('downloadCount')) {
            document.getElementById('download-count').textContent = localStorage.getItem('downloadCount');
        } else {
            // Valor inicial se for a primeira vez
            localStorage.setItem('downloadCount', '1250'); // Você pode começar com um número base
            document.getElementById('download-count').textContent = '1250';
        }
    });

    // Função para incrementar o contador
    function incrementDownloadCount() {
        let currentCount = parseInt(localStorage.getItem('downloadCount')) || 1250;
        currentCount += 1;
        localStorage.setItem('downloadCount', currentCount.toString());
        document.getElementById('download-count').textContent = currentCount;
        
        // Você pode adicionar aqui uma chamada para salvar no servidor se quiser
    }