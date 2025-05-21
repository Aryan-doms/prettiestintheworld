// Social Media Sharing Script
// This script adds social media sharing functionality to help increase backlinks and SEO

document.addEventListener('DOMContentLoaded', function() {
    // Create the social sharing container
    const createSocialShareContainer = () => {
        const container = document.createElement('div');
        container.className = 'social-share-container';
        container.innerHTML = `
            <div class="social-share-buttons">
                <button id="share-facebook" title="Share on Facebook">
                    <i class="fab fa-facebook-f"></i>
                </button>
                <button id="share-twitter" title="Share on Twitter">
                    <i class="fab fa-twitter"></i>
                </button>
                <button id="share-pinterest" title="Pin on Pinterest">
                    <i class="fab fa-pinterest-p"></i>
                </button>
                <button id="share-whatsapp" title="Share on WhatsApp">
                    <i class="fab fa-whatsapp"></i>
                </button>
            </div>
        `;
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .social-share-container {
                position: fixed;
                left: 20px;
                bottom: 20px;
                z-index: 999;
            }
            
            .social-share-buttons {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            
            .social-share-buttons button {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: none;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.3s ease;
                box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                color: white;
            }
            
            .social-share-buttons button:hover {
                transform: scale(1.1);
            }
            
            #share-facebook {
                background-color: #3b5998;
            }
            
            #share-twitter {
                background-color: #1da1f2;
            }
            
            #share-pinterest {
                background-color: #e60023;
            }
            
            #share-whatsapp {
                background-color: #25d366;
            }
            
            @media (max-width: 768px) {
                .social-share-container {
                    left: 10px;
                    bottom: 10px;
                }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(container);
        
        // Add event listeners
        document.getElementById('share-facebook').addEventListener('click', () => {
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), '_blank');
        });
        
        document.getElementById('share-twitter').addEventListener('click', () => {
            window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href) + '&text=' + encodeURIComponent('Check out the prettiest girl in the world!'), '_blank');
        });
        
        document.getElementById('share-pinterest').addEventListener('click', () => {
            // Get the first image from the page or use a default
            let image = document.querySelector('img');
            let imageUrl = image ? image.src : '';
            window.open('https://pinterest.com/pin/create/button/?url=' + encodeURIComponent(window.location.href) + '&media=' + encodeURIComponent(imageUrl) + '&description=' + encodeURIComponent('The prettiest girl in the world'), '_blank');
        });
        
        document.getElementById('share-whatsapp').addEventListener('click', () => {
            window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent('Check out the prettiest girl in the world! ' + window.location.href), '_blank');
        });
    };
    
    // Create the social share container
    createSocialShareContainer();
});
