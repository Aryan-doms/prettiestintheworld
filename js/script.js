// JavaScript for Hello Kitty themed website

document.addEventListener('DOMContentLoaded', function() {
    // Add animated entrance effects for elements
    const animatedElements = document.querySelectorAll('.favorites-section, .message-card, .kitty-frame');
    
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    // Observe all animated elements
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add floating hearts dynamically
    const createFloatingHearts = () => {
        const container = document.body;
        const heart = document.createElement('div');
        
        // Random position, size, and animation duration
        const startPosX = Math.random() * window.innerWidth;
        const size = Math.random() * 20 + 10;
        const duration = Math.random() * 4 + 4;
        
        heart.innerHTML = '💗';
        heart.className = 'dynamic-heart';
        heart.style.left = startPosX + 'px';
        heart.style.fontSize = size + 'px';
        heart.style.animationDuration = duration + 's';
        
        container.appendChild(heart);
        
        // Remove the heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    };
    
    // Create hearts at intervals
    setInterval(createFloatingHearts, 3000);
    
    // Initialize with a few hearts
    for (let i = 0; i < 3; i++) {
        setTimeout(createFloatingHearts, i * 1000);
    }
    
    // Add hover effects to favorite items
    const favoriteItems = document.querySelectorAll('.favorite-item');
    favoriteItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const emoji = this.querySelector('.emoji-circle');
            if (emoji) {
                emoji.style.transform = 'scale(1.2)';
                emoji.style.transition = 'transform 0.3s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const emoji = this.querySelector('.emoji-circle');
            if (emoji) {
                emoji.style.transform = 'scale(1)';
            }
        });
    });
});

// You can add more JavaScript functionality here as needed
