// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-link');

// Scroll Event for Navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle icon between bars and times (close)
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking a link
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Scroll Reveal Animations
const revealElements = document.querySelectorAll('.section-title, .glass-panel, .edu-card');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach(el => {
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
};

// Initial state for reveal elements
revealElements.forEach(el => {
    el.classList.add('reveal');
});

// Trigger once on load, then on scroll
window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);

// Add dynamic interaction for skill tags
const skillTags = document.querySelectorAll('.tag');
skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'scale(1.1)';
    });
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'scale(1)';
    });
});

// Project Image Tabs Switcher
const projectTabs = document.querySelectorAll('.st-tab');
const projectImage = document.getElementById('superstore-img');

if (projectTabs && projectImage) {
    projectTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            projectTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Change image source with a fade effect
            projectImage.style.opacity = '0';
            setTimeout(() => {
                projectImage.src = tab.getAttribute('data-img');
                projectImage.style.opacity = '1';
            }, 300);
        });
    });
}
