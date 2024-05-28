document.addEventListener("DOMContentLoaded", function() {
    const ProjectSection = document.getElementById('Project');

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
        if (isInViewport(ProjectSection, 40)) {
          ProjectSection.classList.add('animate');

            window.removeEventListener('scroll', handleAnimation);window.addEventListener('DOMContentLoaded', () => {
                const projectSection = document.getElementById('Project');
                const projectSkills = projectSection.querySelector('.Clg-Project-Skills');
                const projectDetails = projectSection.querySelector('.Clg-Project-Details');
                const designWebProject = projectSection.querySelector('.Design_web_project');
            
                function isInViewport(element) {
                    const rect = element.getBoundingClientRect();
                    return (
                        rect.top >= 0 &&
                        rect.left >= 0 &&
                        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                    );
                }
            
                function handleScrollAnimation() {
                    if (isInViewport(projectSkills) || isInViewport(projectDetails) || isInViewport(designWebProject)) {
                        projectSection.classList.add('animate');
                    }
                }
            
                window.addEventListener('scroll', handleScrollAnimation);
            
                // Initial check
                handleScrollAnimation();
            });
            
        }
    }

    handleAnimation();
    window.addEventListener('scroll', handleAnimation);
});