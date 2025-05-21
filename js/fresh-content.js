// This script updates the "last-modified" meta tag on each page load
// This helps search engines recognize that the content is frequently updated
// which can positively impact SEO rankings

document.addEventListener('DOMContentLoaded', function() {
    // Get the current date in ISO format
    const now = new Date();
    const formattedDate = now.toISOString();
    
    // Create or update the last-modified meta tag
    let lastModifiedMeta = document.querySelector('meta[name="last-modified"]');
    
    if (!lastModifiedMeta) {
        lastModifiedMeta = document.createElement('meta');
        lastModifiedMeta.setAttribute('name', 'last-modified');
        document.head.appendChild(lastModifiedMeta);
    }
    
    lastModifiedMeta.setAttribute('content', formattedDate);
    
    // Update the modified date in the footer if it exists
    const modifiedDateElement = document.getElementById('last-modified-date');
    if (modifiedDateElement) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        modifiedDateElement.textContent = now.toLocaleDateString(undefined, options);
    }
});
