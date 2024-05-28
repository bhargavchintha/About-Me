window.addEventListener('DOMContentLoaded', (event) => {
    const divs = document.querySelectorAll(".Section_Scroll");
    const navLinks = document.querySelectorAll("nav a.NAV-Items");

    function isInViewport(element, offset = 0) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= -offset &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener('scroll', () => {
        let current = "";

        divs.forEach((div) => {
            const divTop = div.getBoundingClientRect().top;
            if (divTop <= 100) {
                current = div.getAttribute("id");
            }

            // Add animation class if the div is in the viewport
            if (isInViewport(div, 100)) {
                div.classList.add('animate');
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });

    // Initial check to add animation class to elements already in viewport
    divs.forEach((div) => {
        if (isInViewport(div, 100)) {
            div.classList.add('animate');
        }
    });
});
