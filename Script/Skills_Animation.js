document.addEventListener("DOMContentLoaded", function() {
    const skillsSection = document.getElementById('Skills');

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
        if (isInViewport(skillsSection, 20)) {
            skillsSection.classList.add('animate');
            window.removeEventListener('scroll', handleAnimation);
        }
    }

    handleAnimation();
    window.addEventListener('scroll', handleAnimation);
});