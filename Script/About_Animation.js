document.addEventListener("DOMContentLoaded", function() {
    const AboutSection = document.getElementById('About');
    if (!AboutSection) return;

    function isInViewport(element, offset = 0) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) - offset &&
            rect.bottom > offset
        );
    }

    function handleAnimation() {
        if (isInViewport(AboutSection, 20)) {
            AboutSection.classList.add('animate');
            window.removeEventListener('scroll', handleAnimation);
        }
    }

    handleAnimation();
    window.addEventListener('scroll', handleAnimation);
});