document.addEventListener("DOMContentLoaded", function() {
    const skillsSection = document.getElementById('Skills');

    function isInViewport(element, offset = 0) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        
        // For mobile devices, increase offset or adjust height calculation
        if (windowWidth <= 768) {  // Mobile breakpoint
            offset = 60;  // More offset for mobile view
        }

        return (
            rect.top >= -offset &&
            rect.left >= 0 &&
            rect.bottom <= windowHeight + offset &&
            rect.right <= windowWidth
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
