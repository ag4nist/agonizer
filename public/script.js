// script.js

// Logo error handling - fallback to text if image fails to load
const logoImg = document.getElementById('logoImg');
const logoFallback = document.getElementById('logoFallback');

logoImg.addEventListener('error', () => {
    logoImg.style.display = 'none';
    logoFallback.style.display = 'block';
});

// Floating particles effect
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Smooth scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});

// Initialize particles when page loads
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
});

// Add click handlers for nav links
document.querySelectorAll('.nav-left a, .nav-right a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Add hover effects for feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add glitch effect to logo on hover
const logoLink = document.querySelector('.logo-link');
logoLink.addEventListener('mouseenter', () => {
    logoLink.style.animation = 'glow 0.5s ease-in-out';
});
