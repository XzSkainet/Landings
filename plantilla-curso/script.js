/**
 * E-Learning Platform - Main JavaScript File
 *
 * This script handles all interactive elements of the E-Learning platform,
 * including navigation, animations, modals, and form handling.
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim();
        if (all) {
            return [...document.querySelectorAll(el)];
        } else {
            return document.querySelector(el);
        }
    };

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all);
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener));
            } else {
                selectEl.addEventListener(type, listener);
            }
        }
    };

    /**
     * Easy on scroll event listener
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener);
    };

    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header');
    if (selectHeader) {
        const headerScrolled = () => {
            if (window.scrollY > 50) {
                selectHeader.classList.add('header-scrolled');
            } else {
                selectHeader.classList.remove('header-scrolled');
            }
        };
        window.addEventListener('load', headerScrolled);
        onscroll(document, headerScrolled);
    }

    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top');
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active');
            } else {
                backtotop.classList.remove('active');
            }
        };
        window.addEventListener('load', toggleBacktotop);
        onscroll(document, toggleBacktotop);
    }

    /**
     * Mobile nav toggle
     */
    const mobileNavToggle = select('.mobile-nav-toggle');
    const navbarUl = select('#navbar ul');

    if (mobileNavToggle && navbarUl) {
        mobileNavToggle.addEventListener('click', function() {
            navbarUl.classList.toggle('active');

            // Cambiamos el ícono según el estado del menú
            const icon = this.querySelector('i');
            if (icon) {
                if (navbarUl.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    /**
     * Mobile nav dropdown toggle
     */
    on('click', '.navbar .dropdown > a', function(e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault();
            this.nextElementSibling.classList.toggle('dropdown-active');
        }
    }, true);

    /**
     * Scrool with offset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
        if (select(this.hash)) {
            e.preventDefault();

            let navbar = select('#navbar');
            let navbarUl = select('#navbar ul');

            if (navbarUl.classList.contains('active')) {
                navbarUl.classList.remove('active');
                let navbarToggle = select('.mobile-nav-toggle');
                const icon = navbarToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }

            let header = select('#header');
            let offset = header.offsetHeight;

            let elementPos = select(this.hash).offsetTop;
            window.scrollTo({
                top: elementPos - offset,
                behavior: 'smooth'
            });
        }
    }, true);

    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
        // Add animations to elements when they enter the viewport
        const animateElements = () => {
            const elements = select('.animate-on-scroll', true);
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementPosition < windowHeight - 50) {
                    const animationClass = element.dataset.animation || 'fadeIn';
                    element.classList.add(animationClass);
                }
            });
        };

        // Initial check for elements already in viewport on page load
        animateElements();

        // Check for elements entering viewport during scroll
        window.addEventListener('scroll', animateElements);
    });

    /**
     * Course Filter
     */
    window.addEventListener('load', () => {
        let coursesContainer = select('.courses-container');
        if (coursesContainer) {
            let coursesFilters = select('.courses-filter li', true);

            on('click', '.courses-filter li', function(e) {
                e.preventDefault();
                coursesFilters.forEach(el => el.classList.remove('filter-active'));
                this.classList.add('filter-active');

                const filterValue = this.getAttribute('data-filter');

                const courseItems = select('.course-item', true);

                courseItems.forEach(item => {
                    if (filterValue === '*' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }, true);
        }
    });

    /**
     * FAQ Accordion
     */
    const faqItems = select('.faq-item', true);
    if (faqItems) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');

            question.addEventListener('click', () => {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle current item
                item.classList.toggle('active');
            });
        });
    }

    /**
     * Modal Handling
     */
        // Helper functions for modals
    const openModal = (modalId) => {
            const modal = select('#' + modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        };

    const closeModal = (modal) => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Open login modal
    on('click', '.login-btn, .open-login-modal', function(e) {
        e.preventDefault();
        openModal('login-modal');
    });

    // Open signup modal
    on('click', '.signup-btn, .open-signup-modal', function(e) {
        e.preventDefault();
        openModal('signup-modal');
    });

    // Open course preview modal
    on('click', '.course-item .course-img, .course-item h3 a', function(e) {
        e.preventDefault();
        openModal('course-preview-modal');
    });

    // Close modals when clicking on close button or outside
    on('click', '.close-modal', function() {
        const modal = this.closest('.modal');
        closeModal(modal);
    });

    // Close modal when clicking outside of modal content
    on('click', '.modal', function(e) {
        if (e.target === this) {
            closeModal(this);
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const activeModal = select('.modal.active');
            if (activeModal) {
                closeModal(activeModal);
            }
        }
    });

    /**
     * Form Validation and Submission
     */
        // Contact Form
    const contactForm = select('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Simple validation
            let valid = true;
            const name = select('#name');
            const email = select('#email');
            const subject = select('#subject');
            const message = select('#message');

            if (name.value.trim() === '') {
                valid = false;
                name.classList.add('error');
            } else {
                name.classList.remove('error');
            }

            if (email.value.trim() === '' || !isValidEmail(email.value)) {
                valid = false;
                email.classList.add('error');
            } else {
                email.classList.remove('error');
            }

            if (subject.value.trim() === '') {
                valid = false;
                subject.classList.add('error');
            } else {
                subject.classList.remove('error');
            }

            if (message.value.trim() === '') {
                valid = false;
                message.classList.add('error');
            } else {
                message.classList.remove('error');
            }

            if (valid) {
                // Here you would typically send the form data to your server
                // For demo purposes, we'll just simulate a successful submission

                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;

                submitButton.disabled = true;
                submitButton.textContent = 'Enviando...';

                setTimeout(() => {
                    // Show success message
                    contactForm.innerHTML = `
                        <div class="form-success">
                            <i class="fas fa-check-circle"></i>
                            <h3>¡Mensaje enviado correctamente!</h3>
                            <p>Gracias por contactarnos. Recibirás una respuesta muy pronto.</p>
                        </div>
                    `;
                }, 1500);
            }
        });
    }

    // Newsletter Form
    const newsletterForm = select('#newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = select('#newsletter-email');

            if (email.value.trim() === '' || !isValidEmail(email.value)) {
                email.classList.add('error');
                return;
            } else {
                email.classList.remove('error');
            }

            // Here you would typically send the form data to your server
            // For demo purposes, we'll just simulate a successful submission

            const submitButton = newsletterForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;

            submitButton.disabled = true;
            submitButton.textContent = 'Suscribiendo...';

            setTimeout(() => {
                // Show success message
                newsletterForm.innerHTML = `
                    <div class="form-success">
                        <p>¡Te has suscrito correctamente a nuestra newsletter!</p>
                    </div>
                `;
            }, 1500);
        });
    }

    // Login Form
    const loginForm = select('#loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Simple validation
            let valid = true;
            const email = select('#login-email');
            const password = select('#login-password');

            if (email.value.trim() === '' || !isValidEmail(email.value)) {
                valid = false;
                email.classList.add('error');
            } else {
                email.classList.remove('error');
            }

            if (password.value.trim() === '') {
                valid = false;
                password.classList.add('error');
            } else {
                password.classList.remove('error');
            }

            if (valid) {
                // Here you would typically authenticate the user
                // For demo purposes, we'll just simulate a successful login

                const submitButton = loginForm.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;

                submitButton.disabled = true;
                submitButton.textContent = 'Iniciando sesión...';

                setTimeout(() => {
                    // Redirect to dashboard or refresh page
                    window.location.reload();
                }, 1500);
            }
        });
    }

    // Signup Form
    const signupForm = select('#signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Simple validation
            let valid = true;
            const firstname = select('#signup-firstname');
            const lastname = select('#signup-lastname');
            const email = select('#signup-email');
            const password = select('#signup-password');
            const confirmPassword = select('#signup-confirm-password');

            if (firstname.value.trim() === '') {
                valid = false;
                firstname.classList.add('error');
            } else {
                firstname.classList.remove('error');
            }

            if (lastname.value.trim() === '') {
                valid = false;
                lastname.classList.add('error');
            } else {
                lastname.classList.remove('error');
            }

            if (email.value.trim() === '' || !isValidEmail(email.value)) {
                valid = false;
                email.classList.add('error');
            } else {
                email.classList.remove('error');
            }

            if (password.value.trim() === '' || password.value.length < 8) {
                valid = false;
                password.classList.add('error');
            } else {
                password.classList.remove('error');
            }

            if (confirmPassword.value !== password.value) {
                valid = false;
                confirmPassword.classList.add('error');
            } else {
                confirmPassword.classList.remove('error');
            }

            if (valid) {
                // Here you would typically register the user
                // For demo purposes, we'll just simulate a successful registration

                const submitButton = signupForm.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;

                submitButton.disabled = true;
                submitButton.textContent = 'Creando cuenta...';

                setTimeout(() => {
                    // Redirect to dashboard or refresh page
                    window.location.reload();
                }, 1500);
            }
        });
    }

    /**
     * Utility Functions
     */
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    /**
     * Course Preview Video Controls
     */
    const courseVideo = select('.course-preview-video video');
    if (courseVideo) {
        courseVideo.addEventListener('ended', function() {
            // When video ends, show a call-to-action
            const videoContainer = courseVideo.parentElement;

            const ctaElement = document.createElement('div');
            ctaElement.className = 'video-cta';
            ctaElement.innerHTML = `
                <h3>¡Únete y aprende ahora!</h3>
                <p>Este es solo un fragmento del curso completo</p>
                <a href="#" class="btn-get-course">Obtener Curso Completo</a>
            `;

            videoContainer.appendChild(ctaElement);

            // Add event listener to replay video
            const replayBtn = document.createElement('button');
            replayBtn.className = 'replay-btn';
            replayBtn.innerHTML = '<i class="fas fa-redo"></i>';
            videoContainer.appendChild(replayBtn);

            replayBtn.addEventListener('click', function() {
                // Remove CTA and replay button
                videoContainer.removeChild(ctaElement);
                videoContainer.removeChild(replayBtn);

                // Restart video
                courseVideo.currentTime = 0;
                courseVideo.play();
            });
        });
    }

    /**
     * Add to Cart Functionality
     */
    on('click', '.btn-add-cart', function(e) {
        e.preventDefault();

        // Get course information
        const courseItem = this.closest('.course-item') || this.closest('.course-preview');
        const courseName = courseItem.querySelector('h3').textContent.trim();
        const coursePrice = courseItem.querySelector('.current-price').textContent.trim();

        // Animation effect
        this.innerHTML = '<i class="fas fa-check"></i> Añadido';
        this.classList.add('added');

        // Create and show notification
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-shopping-cart"></i>
                <div class="notification-text">
                    <p><strong>${courseName}</strong> ha sido añadido al carrito</p>
                    <p class="price">${coursePrice}</p>
                </div>
                <a href="#" class="view-cart">Ver Carrito</a>
            </div>
            <div class="notification-progress"></div>
        `;

        document.body.appendChild(notification);

        // Show notification with animation
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // Auto-hide notification after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            notification.addEventListener('transitionend', function() {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            });
        }, 5000);

        // Reset button after 2 seconds
        setTimeout(() => {
            this.innerHTML = 'Añadir al Carrito';
            this.classList.remove('added');
        }, 2000);
    });

    /**
     * Simulate loading for better UX
     */
    window.addEventListener('load', function() {
        // Hide preloader after page is fully loaded
        const preloader = select('#preloader');
        if (preloader) {
            preloader.remove();
        }

        // Add animation classes to elements
        document.body.classList.add('loaded');

        // Animate counters in stats section
        const counters = select('.counter', true);
        if (counters.length > 0) {
            counters.forEach(counter => {
                const target = parseInt(counter.innerText.replace(/,/g, '').replace(/\+/g, ''));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps

                let current = 0;
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        if (target > 1000) {
                            counter.innerText = Math.ceil(current).toLocaleString() + '+';
                        } else {
                            counter.innerText = Math.ceil(current) + '+';
                        }
                        requestAnimationFrame(updateCounter);
                    } else {
                        if (target > 1000) {
                            counter.innerText = target.toLocaleString() + '+';
                        } else {
                            counter.innerText = target + '+';
                        }
                    }
                };

                updateCounter();
            });
        }
    });

    /**
     * Testimonials Slider
     */
    const testimonialItems = select('.testimonial-item', true);
    if (testimonialItems.length > 0) {
        let currentIndex = 0;

        // Show only first two testimonials initially on mobile
        const showTestimonials = () => {
            if (window.innerWidth < 768) {
                testimonialItems.forEach((item, index) => {
                    item.style.display = index === currentIndex ? 'block' : 'none';
                });

                // Create pagination if it doesn't exist
                let pagination = select('.testimonial-pagination');
                if (!pagination) {
                    pagination = document.createElement('div');
                    pagination.className = 'testimonial-pagination';

                    const dotsHTML = Array(testimonialItems.length).fill('').map((_, i) =>
                        `<span class="dot ${i === 0 ? 'active' : ''}"></span>`
                    ).join('');

                    pagination.innerHTML = dotsHTML;
                    select('.testimonials-slider').appendChild(pagination);

                    // Add event listeners to dots
                    const dots = select('.dot', true);
                    dots.forEach((dot, i) => {
                        dot.addEventListener('click', () => {
                            currentIndex = i;
                            showTestimonials();

                            // Update active dot
                            dots.forEach((d, idx) => {
                                d.classList.toggle('active', idx === i);
                            });
                        });
                    });
                }

                // Update active dot
                const dots = select('.dot', true);
                dots.forEach((dot, idx) => {
                    dot.classList.toggle('active', idx === currentIndex);
                });
            } else {
                // On desktop, show all testimonials
                testimonialItems.forEach(item => {
                    item.style.display = 'block';
                });

                // Remove pagination if exists
                const pagination = select('.testimonial-pagination');
                if (pagination) {
                    pagination.remove();
                }
            }
        };

        // Call initially and on resize
        showTestimonials();
        window.addEventListener('resize', showTestimonials);

        // Auto-slide on mobile
        if (window.innerWidth < 768) {
            setInterval(() => {
                currentIndex = (currentIndex + 1) % testimonialItems.length;
                showTestimonials();
            }, 5000);
        }

        // Add swipe functionality for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        const handleSwipe = () => {
            if (touchStartX - touchEndX > 50) {
                // Swipe left
                currentIndex = (currentIndex + 1) % testimonialItems.length;
            } else if (touchEndX - touchStartX > 50) {
                // Swipe right
                currentIndex = (currentIndex - 1 + testimonialItems.length) % testimonialItems.length;
            }
            showTestimonials();
        };

        select('.testimonials-slider').addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });

        select('.testimonials-slider').addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }

    /**
     * Search functionality
     */
    const searchIcon = select('.search-icon');
    const searchForm = select('.search-form');

    if (searchIcon && searchForm) {
        searchIcon.addEventListener('click', function(e) {
            e.preventDefault();
            searchForm.classList.toggle('active');

            if (searchForm.classList.contains('active')) {
                searchForm.querySelector('input').focus();
            }
        });

        // Close search form when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-form') && !e.target.closest('.search-icon')) {
                searchForm.classList.remove('active');
            }
        });

        // Handle search form submission
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = this.querySelector('input').value.trim();

            if (searchTerm.length > 2) {
                // Here you would typically handle the search functionality
                // For demo purposes, we'll just add a basic filter

                const courseItems = select('.course-item', true);
                let foundResults = false;

                courseItems.forEach(item => {
                    const title = item.querySelector('h3').textContent.toLowerCase();
                    if (title.includes(searchTerm.toLowerCase())) {
                        item.style.display = 'block';
                        foundResults = true;
                    } else {
                        item.style.display = 'none';
                    }
                });

                // Show message if no results found
                let noResultsMsg = select('.no-results-message');
                if (!foundResults) {
                    if (!noResultsMsg) {
                        noResultsMsg = document.createElement('div');
                        noResultsMsg.className = 'no-results-message';
                        noResultsMsg.innerHTML = `
                            <p>No se encontraron resultados para "${searchTerm}"</p>
                            <button class="reset-search">Ver todos los cursos</button>
                        `;
                        select('.courses-container').parentNode.appendChild(noResultsMsg);

                        // Add event listener to reset button
                        noResultsMsg.querySelector('.reset-search').addEventListener('click', function() {
                            courseItems.forEach(item => {
                                item.style.display = 'block';
                            });
                            noResultsMsg.remove();
                            searchForm.querySelector('input').value = '';
                        });
                    }
                } else if (noResultsMsg) {
                    noResultsMsg.remove();
                }
            }
        });
    }
});