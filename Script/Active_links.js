window.addEventListener('DOMContentLoaded', (event) => {
  const sections = document.querySelectorAll(".Section_Scroll");
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

  function handleScroll() {
      let current = "Home";

      sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop <= 100) {
              current = section.getAttribute("id");
          }

          // Add animation class if the section is in the viewport
          if (isInViewport(section, 100)) {
              section.classList.add('animate');
              if (section.id === 'About') {
                  document.querySelector('.Name-About').classList.add('animate');
              }
          }
      });

      navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === current) {
              link.classList.add("active");
          }
      });
  }

  window.addEventListener('scroll', handleScroll);
});
