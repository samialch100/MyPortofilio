// main.js - Cool JavaScript Features for Portfolio

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initTypingEffect();
    initScrollReveal();
    initBackToTop();
    initSmoothScroll();
    initMobileMenu();
});

// ===== TYPING EFFECT =====
function initTypingEffect() {
    const text = "Hi, I'm Sami";
    const element = document.querySelector('.header-text h1');
    let index = 0;
    let isDeleting = false;

    function typeWriter() {
        if (!isDeleting) {
            element.innerHTML = text.slice(0, index + 1) + '<span class="cursor">|</span>';
            index++;

            if (index === text.length) {
                isDeleting = true;
                setTimeout(typeWriter, 2000); // Pause at end
                return;
            }
        } else {
            element.innerHTML = text.slice(0, index) + '<span class="cursor">|</span>';
            index--;

            if (index === 0) {
                isDeleting = false;
            }
        }

        const speed = isDeleting ? 100 : 150;
        setTimeout(typeWriter, speed);
    }

    // Start typing effect after a short delay
    setTimeout(typeWriter, 1000);
}

// ===== SCROLL REVEAL ANIMATIONS =====
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, observerOptions);

    // Add reveal class to elements that should animate
    const revealElements = document.querySelectorAll('.skill-item, .cert-box, .about-cal-1, .about-cal-2, .contact-intro');
    revealElements.forEach(el => {
        el.classList.add('reveal-element');
        observer.observe(el);
    });
}

// ===== INTERACTIVE SKILL BARS =====

// ===== BACK TO TOP BUTTON =====
function initBackToTop() {
    // Create back to top button
    const backToTopBtn = document.createElement('div');
    backToTopBtn.id = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.title = 'Back to Top';
    document.body.appendChild(backToTopBtn);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== SMOOTH SCROLLING =====
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70; // Account for fixed header

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Global function for onclick fallback
function toggleMobileMenu() {
    console.log('toggleMobileMenu called');
    const nav = document.querySelector('nav');
    const menuToggle = document.querySelector('.menu-toggle');

    if (nav) {
        nav.classList.toggle('show');
        if (menuToggle) {
            menuToggle.textContent = nav.classList.contains('show') ? '✕' : '☰';
        }
        console.log('Menu toggled, show class:', nav.classList.contains('show'));
    }
}

// ===== MOBILE MENU ENHANCEMENT =====
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    console.log('initMobileMenu called');
    console.log('menuToggle found:', menuToggle);
    console.log('nav found:', nav);

    if (menuToggle && nav) {
        console.log('Adding click event listener to menu toggle');

        menuToggle.addEventListener('click', function(e) {
            console.log('Menu toggle clicked!');
            e.preventDefault();
            e.stopPropagation();

            nav.classList.toggle('show');
            menuToggle.textContent = nav.classList.contains('show') ? '✕' : '☰';
            console.log('Menu show class:', nav.classList.contains('show'));
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !nav.contains(e.target)) {
                nav.classList.remove('show');
                menuToggle.textContent = '☰';
            }
        });
    } else {
        console.log('Menu toggle or nav not found');
    }
}
