// Rose Day Countdown Timer - Display Mode Only
// Logic removed to prevent interference, just static display of 00:00:00:00

document.addEventListener('DOMContentLoaded', function() {
    // Get countdown elements
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // Set everything to zero immediately
    if(daysElement) daysElement.textContent = '00';
    if(hoursElement) hoursElement.textContent = '00';
    if(minutesElement) minutesElement.textContent = '00';
    if(secondsElement) secondsElement.textContent = '00';
    
    console.log('Countdown logic removed. Static 00s displayed.');
});
