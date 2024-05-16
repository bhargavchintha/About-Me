document.addEventListener("DOMContentLoaded", function() {
    const AboutSection = document.getElementById('About');

    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle animation
    function handleAnimation() {
        if (isInViewport(AboutSection)) {
            AboutSection.classList.add('animate');
          
            window.removeEventListener('scroll', handleAnimation);
        }
    }

   
    handleAnimation();
    window.addEventListener('scroll', handleAnimation);
});