/*
==========================
Entrenador PRO - Main JavaScript
==========================
*/

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {

    // Referencias a elementos del DOM
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const header = document.querySelector('header');
    const contactForm = document.getElementById('contact-form');
    const testimoniosSlider = document.querySelector('.testimonios-slider');

    // Toggle del menú móvil
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Cambiar estilo del header al hacer scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '20px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });

    // Manejo del formulario de contacto
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Obtener los valores del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const mensaje = document.getElementById('mensaje').value;

            // Aquí puedes agregar la lógica para enviar el formulario
            // Por ejemplo, enviar a un servidor o mostrar un mensaje de éxito
            alert(`¡Gracias ${nombre}! Hemos recibido tu mensaje y te contactaremos pronto.`);

            // Limpia el formulario
            contactForm.reset();
        });
    }

    // Efecto de desplazamiento suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animación para los elementos cuando aparecen en la pantalla
    const animateOnScroll = function() {
        // Selecciona todos los elementos que queremos animar
        const elements = document.querySelectorAll('.servicio-card, .horario-dia, .testimonio');

        elements.forEach(element => {
            // Calcula la posición del elemento en relación con la ventana
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Si el elemento está en el viewport, agrega la clase para animarlo
            if (elementPosition < windowHeight - 50) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Aplicar estilos iniciales para la animación
    document.querySelectorAll('.servicio-card, .horario-dia, .testimonio').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Ejecutar la función de animación al cargar y al hacer scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // Carousel de testimonios automático
    let scrollInterval;

    // Inicia el desplazamiento automático
    const startAutoScroll = function() {
        if (testimoniosSlider) {
            scrollInterval = setInterval(() => {
                testimoniosSlider.scrollLeft += 1;

                // Si hemos llegado al final, volver al inicio
                const scrollWidth = testimoniosSlider.scrollWidth - testimoniosSlider.clientWidth;
                if (testimoniosSlider.scrollLeft >= scrollWidth) {
                    testimoniosSlider.scrollLeft = 0;
                }
            }, 20);
        }
    };

    // Detener el desplazamiento automático al interactuar con el slider
    if (testimoniosSlider) {
        testimoniosSlider.addEventListener('mouseenter', () => {
            clearInterval(scrollInterval);
        });

        testimoniosSlider.addEventListener('mouseleave', () => {
            startAutoScroll();
        });

        // Iniciar el desplazamiento automático
        startAutoScroll();
    }

    // Inicializar contador de estadísticas (simulado)
    const iniciarContadores = function() {
        const contadores = document.querySelectorAll('.contador');

        contadores.forEach(contador => {
            const valorFinal = parseInt(contador.getAttribute('data-contador'));
            let valorActual = 0;

            const incremento = valorFinal / 100;

            const actualizarContador = setInterval(() => {
                valorActual += incremento;
                contador.textContent = Math.floor(valorActual);

                if (valorActual >= valorFinal) {
                    contador.textContent = valorFinal;
                    clearInterval(actualizarContador);
                }
            }, 20);
        });
    };

    // Detectar si hay contadores en la página e inicializarlos
    if (document.querySelector('.contador')) {
        iniciarContadores();
    }
});