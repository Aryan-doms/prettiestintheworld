// Rose Day Countdown Timer - IST Timezone
// Target: February 7, 2026 at 00:00:00 IST

document.addEventListener('DOMContentLoaded', function() {
    // Set the target date for Rose Day in IST
    // IST is UTC+5:30
    const roseDayDate = new Date('2026-02-07T00:00:00+05:30');
    
    // Get countdown elements
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // Update countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // Initial update
    updateCountdown();
    
    function updateCountdown() {
        // Get current time
        const now = new Date();
        
        // Calculate time difference
        const timeDifference = roseDayDate - now;
        
        // Check if countdown has ended
        if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            displayZeros();
            // Future: Redirect to next page or show surprise
            // window.location.href = 'rose-day-surprise.html';
            return;
        }
        
        // Calculate time units
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        
        // Update DOM with animation
        updateElement(daysElement, days);
        updateElement(hoursElement, hours);
        updateElement(minutesElement, minutes);
        updateElement(secondsElement, seconds);
    }
    
    function updateElement(element, value) {
        const formattedValue = String(value).padStart(2, '0');
        
        if (element.textContent !== formattedValue) {
            element.style.animation = 'none';
            setTimeout(() => {
                element.textContent = formattedValue;
                element.style.animation = 'pulse 0.5s ease';
            }, 10);
        }
    }
    
    function displayZeros() {
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
    }
});

// Add pulse animation to CSS dynamically if not present
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);
