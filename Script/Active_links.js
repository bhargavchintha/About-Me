window.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll(".Section_Scroll");
    const navLinks = document.querySelectorAll("nav a.NAV-Items");
  
    window.addEventListener('scroll', () => {
      let current = "";
  
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === current) {
          link.classList.add("active");
        }
      });
    });
  });