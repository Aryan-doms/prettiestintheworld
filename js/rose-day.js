document.addEventListener('DOMContentLoaded', function() {
    const TARGET_DATE = new Date('2026-02-07T00:00:00+05:30'); 
    
    // Elements
    const countdownSection = document.getElementById('countdown-section');
    const beautifulGirlBtn = document.getElementById('show-main-content-btn');
    const surpriseBtn = document.getElementById('surprise-btn');
    const waitMessage = document.getElementById('wait-message');

    // 1. 'Beautiful Girl' Button -> Show Home Page Content
    if(beautifulGirlBtn) {
        beautifulGirlBtn.addEventListener('click', function() {
            // Hide countdown
            countdownSection.style.display = 'none';
            
            // Show main sections
            const sectionsToShow = [
                document.querySelector('.favorites-section'),
                document.querySelector('.message-section'),
                document.querySelector('.engagement-section'),
                document.querySelector('.kitty-frame') ? document.querySelector('.kitty-frame').closest('section') : null
            ];

            sectionsToShow.forEach(section => {
                if (section) {
                    section.style.display = 'block';
                    section.classList.add('animate__animated', 'animate__fadeIn');
                }
            });
            
            // Show footer
            const footer = document.querySelector('footer');
            if (footer) {
                footer.style.display = 'block';
            }
        });
    }

    // 2. 'Surprise' Button Logic -> Redirect to surprise.html
    if(surpriseBtn) {
        surpriseBtn.addEventListener('click', function() {
            console.log('Redirecting to surprise...');
            window.location.href = 'surprise.html';
        });
    }
});
