document.addEventListener("DOMContentLoaded", function() {
    const ContantSection = document.getElementById('Contant');

    function isInViewport(element, offset = 0) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= -offset &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleAnimation() {
        if (isInViewport(ContantSection, 20)) {
          ContantSection.classList.add('animate');
            
            window.removeEventListener('scroll', handleAnimation);
        }
    }

    handleAnimation();
    window.addEventListener('scroll', handleAnimation);
});