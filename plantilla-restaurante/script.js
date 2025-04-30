/*
* Restaurant Deluxe - Landing Page Template
* Designed by Say
* JS Version: 1.0
*/

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Variables
    const header = document.getElementById('header');
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelectorAll('#navbar ul li a');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('modalImg');
    const closeModal = document.querySelector('.close-modal');
    const bookingForm = document.getElementById('bookingForm');
    const prevGallery = document.querySelector('.prev');
    const nextGallery = document.querySelector('.next');

    let currentTestimonial = 0;
    let currentGalleryIndex = 0;
    let galleryImages = [];

    // Sticky Header
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Mobile Menu Toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navbar.classList.remove('active');
        });
    });

    // Active link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Menu Tabs
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Add active class to clicked button
            this.classList.add('active');

            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // Show the tab content that matches the button data-target
            const target = this.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });

    // Testimonial Slider
    function showTestimonial(index) {
        testimonialItems.forEach((item, i) => {
            item.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }

    // Initialize testimonial position
    showTestimonial(currentTestimonial);

    // Next testimonial
    nextBtn.addEventListener('click', function() {
        currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
        showTestimonial(currentTestimonial);
    });

    // Previous testimonial
    prevBtn.addEventListener('click', function() {
        currentTestimonial = (currentTestimonial - 1 + testimonialItems.length) % testimonialItems.length;
        showTestimonial(currentTestimonial);
    });

    // Auto slide testimonials every 5 seconds
    setInterval(function() {
        currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
        showTestimonial(currentTestimonial);
    }, 5000);

    // Gallery Modal
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        galleryImages.push({
            src: img.src,
            alt: img.alt
        });

        item.addEventListener('click', function() {
            openModal(index);
        });
    });

    function openModal(index) {
        modal.style.display = 'block';
        modalImg.src = galleryImages[index].src;
        currentGalleryIndex = index;
    }

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Gallery navigation
    prevGallery.addEventListener('click', function() {
        currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
        modalImg.src = galleryImages[currentGalleryIndex].src;
    });

    nextGallery.addEventListener('click', function() {
        currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
        modalImg.src = galleryImages[currentGalleryIndex].src;
    });

    // Booking Form Validation and Submission
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic form validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const date = document.getElementById('date');
            const time = document.getElementById('time');
            const guests = document.getElementById('guests');

            if (!name.value || !email.value || !phone.value || !date.value || !time.value || !guests.value) {
                alert('Por favor complete todos los campos requeridos.');
                return false;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                alert('Por favor ingrese un correo electrónico válido.');
                return false;
            }

            // Check if date is in the future
            const selectedDate = new Date(date.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                alert('Por favor seleccione una fecha futura.');
                return false;
            }

            // If all validations pass, show success message
            // In a real project, you would send the form data to a server here
            alert('¡Reserva realizada con éxito! Nos pondremos en contacto para confirmar.');
            bookingForm.reset();
        });
    }

    // Smooth scroll for anchor links
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

    // Animation on scroll
    const animateElements = document.querySelectorAll('.feature-box, .menu-item, .gallery-item, .contact-box');

    function checkScroll() {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;

            if (elementPosition < screenPosition - 100) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Initialize animation properties
    animateElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });

    // Check scroll on page load
    checkScroll();

    // Check scroll on scroll event
    window.addEventListener('scroll', checkScroll);

    // Initialize AOS library for animations (if included)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease',
            once: true,
            mirror: false
        });
    }
});