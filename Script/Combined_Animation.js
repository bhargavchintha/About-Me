document.addEventListener("DOMContentLoaded", function() {
    // Animation configurations for each section
    const animationConfigs = {
        'About': {
            offset: 20,
            elements: ['.Name-About', '.About-Grid-1', '.About-Grid-2']
        },
        'Skills': {
            offset: 20,
            elements: ['.Skills-About-Slef', '.Grid_Skills_1', '.Grid_Skills_2']
        },
        'Project': {
            offset: 140,
            elements: ['.Clg-Project-Skills', '.Details-Project-1', '.Details-Project-2', '.Design_web_project', '.About-Web']
        },
        'Contactme': {
            offset: 20,
            elements: ['.Name-About_Contant', '.Grid_Contant-Details_Content-1', '.Grid_Contant-Details_Content-2']
        }
    };

    function isInViewport(element, offset = 0) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        
        // Adjust offset for mobile view (increase for smaller screens)
        if (windowWidth <= 768) {
            offset = 60;
        }

        return (
            rect.top >= -offset &&
            rect.left >= 0 &&
            rect.bottom <= windowHeight + offset &&
            rect.right <= windowWidth
        );
    }

    function handleSectionAnimation(sectionId, config) {
        const section = document.getElementById(sectionId);
        if (!section) {
            console.log(`Section ${sectionId} not found`);
            return;
        }

        if (isInViewport(section, config.offset)) {
            console.log(`Animating section: ${sectionId}`);
            section.classList.add('animate');
        } else {
            console.log(`Section ${sectionId} is out of view`);
        }
    }

    // Set up scroll listeners for each section
    Object.keys(animationConfigs).forEach(sectionId => {
        const config = animationConfigs[sectionId];
        
        // Initial check
        handleSectionAnimation(sectionId, config);

        // Scroll listener for dynamic updates
        window.addEventListener('scroll', () => handleSectionAnimation(sectionId, config));
    });

    // Debug: Log when sections are found
    Object.keys(animationConfigs).forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            console.log(`Found section: ${sectionId}`, section);
        } else {
            console.log(`Section not found: ${sectionId}`);
        }
    });

    // Debugging scroll events
    window.addEventListener('scroll', () => {
        console.log("Scroll event detected!");
    });

});
