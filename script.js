document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const backgroundMusic = document.getElementById('background-music');

    // Muestra la pantalla de inicio y luego la difumina
    if (splashScreen) {
        setTimeout(() => {
            splashScreen.classList.add('fade-out');
        }, 3000);
    }
    
    // Inicia la música de fondo silenciada
    if (backgroundMusic) {
        backgroundMusic.play();
    }

    // Código para la nueva navegación
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    const showSection = (id) => {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(id).classList.add('active');
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    // Muestra la primera sección por defecto (Donaciones)
    showSection('donaciones');
});