// JavaScript for "Prettiest in the World" website

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for the arrow down button
    const scrollDownArrow = document.querySelector('.pulse-animation');
    
    if (scrollDownArrow) {
        scrollDownArrow.addEventListener('click', function(e) {
            e.preventDefault();
            // Scroll to the next section smoothly
            window.scrollBy({
                top: window.innerHeight,
                left: 0,
                behavior: 'smooth'
            });
            
            console.log('Arrow clicked!'); // Debug message to verify click handling
        });
    }
    
    // Add more interactive elements and animations here
    
    // Add a subtle entrance animation for the title
    const mainTitle = document.querySelector('h1');
    if (mainTitle) {
        mainTitle.style.opacity = '0';
        mainTitle.style.transform = 'translateY(20px)';
        mainTitle.style.transition = 'opacity 1.5s ease-out, transform 1.5s ease-out';
        
        setTimeout(() => {
            mainTitle.style.opacity = '1';
            mainTitle.style.transform = 'translateY(0)';
        }, 300);
    }
});

// You can add more JavaScript functionality here as needed
