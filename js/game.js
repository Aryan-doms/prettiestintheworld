document.addEventListener('DOMContentLoaded', function() {
    // Configuration
    const PASSWORD = "bhondu";
    const GAME_DATA = [
        { image: 'images/21-10-24.jpg', date: '2024-10-21' },
        { image: 'images/27-5-25.jpg', date: '2025-05-27' },
        { image: 'images/9-11-25.JPG', date: '2025-11-09' }
    ];

    // State
    let currentLevel = 0;
    let wrongCount = 0;

    // Sections
    const passwordSection = document.getElementById('password-section');
    const miniGameSection = document.getElementById('mini-game-section');
    const finalPrizeSection = document.getElementById('final-prize-section');
    
    // Elements
    const passwordInput = document.getElementById('password-input');
    const submitPasswordBtn = document.getElementById('submit-password');
    
    const gameImage = document.getElementById('game-image');
    const gameDateInput = document.getElementById('game-date-input');
    const submitGuessBtn = document.getElementById('submit-guess');
    const wrongsCounter = document.getElementById('wrongs-counter');
    const wrongCountSpan = document.getElementById('wrong-count');

    // --- Password Logic ---
    if(submitPasswordBtn) {
        submitPasswordBtn.addEventListener('click', checkPassword);
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') checkPassword();
        });
    }

    function checkPassword() {
        if (passwordInput.value.toLowerCase().trim() === PASSWORD) {
            // Correct - Hide Password, Show Game
            passwordSection.classList.add('hidden');
            startGame();
        } else {
            alert("hawww password bhi nahi pata galat dala hai🥺");
            passwordInput.value = '';
            passwordInput.classList.add('animate__shakeX');
            setTimeout(() => passwordInput.classList.remove('animate__shakeX'), 1000);
        }
    }

    // --- Game Logic ---
    function startGame() {
        miniGameSection.classList.remove('hidden');
        loadLevel(0);
    }

    function loadLevel(index) {
        currentLevel = index;
        const levelData = GAME_DATA[index];
        
        // Update Image
        gameImage.src = levelData.image;
        
        // Clear Input
        gameDateInput.value = '';
        
        // Animation reset
        gameImage.classList.remove('animate__fadeIn');
        void gameImage.offsetWidth; // trigger reflow
        gameImage.classList.add('animate__fadeIn');
    }

    if(submitGuessBtn) {
        submitGuessBtn.addEventListener('click', function() {
            const userDate = gameDateInput.value;
            const correctDate = GAME_DATA[currentLevel].date;

            if (!userDate) {
                alert("haww bhul gaye date gapp chup select karo pehele!!");
                return;
            }

            if (userDate === correctDate) {
                // Correct!
                const btnText = submitGuessBtn.innerHTML;
                submitGuessBtn.innerHTML = "Correct! 🎉";
                submitGuessBtn.classList.add('bg-green-500');
                
                setTimeout(() => {
                    submitGuessBtn.innerHTML = btnText;
                    submitGuessBtn.classList.remove('bg-green-500');
                    
                    if (currentLevel < GAME_DATA.length - 1) {
                        loadLevel(currentLevel + 1);
                    } else {
                        showFinalPrize();
                    }
                }, 1000);
                
            } else {
                // Wrong!
                wrongCount++;
                wrongCountSpan.textContent = wrongCount;
                wrongsCounter.classList.remove('hidden');
                
                miniGameSection.classList.add('animate__shakeX');
                setTimeout(() => miniGameSection.classList.remove('animate__shakeX'), 1000);
                
                alert("Nooo! That's not the right date! You don't love Me? 🥺");
            }
        });
    }

    function showFinalPrize() {
        miniGameSection.classList.add('hidden');
        finalPrizeSection.classList.remove('hidden');
        
        // Celebrate
        const text = document.querySelector('#final-prize-section h2');
        if(text) text.classList.add('animate__heartBeat');
    }
});
