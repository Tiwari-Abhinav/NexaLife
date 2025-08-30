// NexaLife Website JavaScript

// DOM Elements
const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const submitBtn = document.getElementById('submitBtn');

// Email Form Handler
if (emailForm) {
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        if (email && isValidEmail(email)) {
            // Simulate form submission
            submitBtn.textContent = 'Welcome aboard! 🚀';
            submitBtn.disabled = true;
            
            // Reset after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = 'Get Early Access';
                submitBtn.disabled = false;
                emailInput.value = '';
            }, 3000);
            
            // Here you would typically send the email to your backend
            console.log('Email submitted:', email);
        }
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fade-in 0.8s ease-out forwards';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .step-card, .benefit-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});

// Newsletter subscription
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    const newsletterInput = newsletterForm.querySelector('.newsletter-input');
    const newsletterBtn = newsletterForm.querySelector('.newsletter-btn');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = newsletterInput.value.trim();
        
        if (email && isValidEmail(email)) {
            newsletterBtn.textContent = 'Subscribed! ✓';
            newsletterBtn.style.background = 'hsl(var(--neon-aqua))';
            
            setTimeout(() => {
                newsletterBtn.textContent = 'Subscribe';
                newsletterBtn.style.background = '';
                newsletterInput.value = '';
            }, 3000);
            
            console.log('Newsletter subscription:', email);
        }
    });
}

// Button hover effects
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Parallax effect for orbs
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    const orbs = document.querySelectorAll('.orb, .bg-orb, .cta-orb');
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.1;
        orb.style.transform = `translateY(${rate * speed}px)`;
    });
});

// Loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Add glow effect on scroll
let ticking = false;

function updateGlowEffects() {
    const scrolled = window.pageYOffset;
    const glowElements = document.querySelectorAll('.glass-card, .cta-card');
    
    glowElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrolled;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate if element is in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
            const progress = (windowHeight - rect.top) / (windowHeight + elementHeight);
            const glowIntensity = Math.sin(progress * Math.PI) * 0.3;
            
            element.style.boxShadow = `0 0 ${20 + glowIntensity * 20}px hsl(var(--primary) / ${glowIntensity})`;
        }
    });
    
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(updateGlowEffects);
        ticking = true;
    }
});

// Mobile menu functionality (if needed later)
function toggleMobileMenu() {
    // Implementation for mobile menu
    console.log('Mobile menu toggled');
}

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Skip to main content with Tab key
    if (e.key === 'Tab' && !e.shiftKey) {
        const focusableElements = document.querySelectorAll(
            'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        // Add focus outline for keyboard navigation
        focusableElements.forEach(element => {
            element.addEventListener('focus', function() {
                this.style.outline = '2px solid hsl(var(--primary))';
                this.style.outlineOffset = '2px';
            });
            
            element.addEventListener('blur', function() {
                this.style.outline = 'none';
            });
        });
    }
});

// Performance optimization - Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Console welcome message
console.log(`
🚀 Welcome to NexaLife!
🌟 Building the future of health-aware productivity
💫 Visit us at nexalife.ai for more information
`);

// Error handling
window.addEventListener('error', function(e) {
    console.error('An error occurred:', e.error);
    // You could send this to your error tracking service
});

// Feature detection and progressive enhancement
if ('serviceWorker' in navigator) {
    // Service worker registration could go here for PWA features
    console.log('Service Worker supported');
}

if ('clipboard' in navigator) {
    // Clipboard API available
    console.log('Clipboard API supported');
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isValidEmail,
        debounce,
        throttle
    };
}