document.addEventListener("DOMContentLoaded", function() {
    // Define sections and navigation links
    const sections = [
        { element: document.getElementById('About'), offset: 20 },
        { element: document.getElementById('Skills'), offset: 20 },
        { element: document.getElementById('Project'), offset: 40 },
        { element: document.getElementById('Contant'), offset: 20 }
    ];
    const navLinks = document.querySelectorAll("nav a.NAV-Items");

    // Function to check if an element is in the viewport
    function isInViewport(element, offset = 0) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= -offset &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle animations
    function handleAnimation() {
        sections.forEach((section, index) => {
            if (isInViewport(section.element, section.offset)) {
                section.element.classList.add('animate');
                sections.splice(index, 1); // Remove this section from the array to stop further checks
            }
        });

        // If all sections have been animated, remove the scroll listener
        if (sections.length === 0) {
            window.removeEventListener('scroll', debouncedHandleScroll);
        }
    }

    // Function to update active navigation link
    function updateActiveNavLink() {
        let current = "";
        document.querySelectorAll(".Section_Scroll").forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop <= 100 && sectionTop >= -section.clientHeight + 100) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");

                // Trigger the animation for the active section
                const activeSection = document.getElementById(current);
                if (activeSection) {
                    activeSection.classList.add('animate');
                }
            }
        });
    }

    // Function to handle scroll event
    function handleScroll() {
        handleAnimation();
        updateActiveNavLink();
    }

    // Debounce the handleScroll function
    const debouncedHandleScroll = debounce(handleScroll, 20);

    // Perform initial animation check
    handleAnimation();

    // Add scroll event listener
    window.addEventListener('scroll', debouncedHandleScroll);

    // Debounce function
    function debounce(func, wait = 20, immediate = true) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
});
