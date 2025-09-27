document.addEventListener("DOMContentLoaded", function() {
    const ContentSection = document.getElementById('Content');
    if (!ContentSection) return;

    function isInViewport(element, offset = 0) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) - offset &&
            rect.bottom > offset
        );
    }

    function handleAnimation() {
        if (isInViewport(ContentSection, 20)) {
            ContentSection.classList.add('animate');
            window.removeEventListener('scroll', handleAnimation);
        }
    }

    handleAnimation();
    window.addEventListener('scroll', handleAnimation);
});