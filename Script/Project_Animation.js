document.addEventListener("DOMContentLoaded", function() {
    const projectSection = document.getElementById('Project');
    if (!projectSection) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                projectSection.classList.add('animate');
                obs.unobserve(projectSection);
            }
        });
    }, {
        // Trigger a bit before fully in view
        root: null,
        rootMargin: "0px 0px -30% 0px",
        threshold: 0
    });

    observer.observe(projectSection);
});