document.addEventListener("DOMContentLoaded", function() {
    const ProjectSection = document.getElementById('Project');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleAnimation() {
        if (isInViewport(ProjectSection)) {
          ProjectSection.classList.add('animate');

            window.removeEventListener('scroll', handleAnimation);
        }
    }

    handleAnimation();
    window.addEventListener('scroll', handleAnimation);
});