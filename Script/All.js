window.addEventListener('DOMContentLoaded', (event) => {
    const divs = document.querySelectorAll(".Section_Scroll");
    const navLinks = document.querySelectorAll("nav a.NAV-Items");

    function isInViewport(element, offset = -205) {
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
    divs.forEach((div) => {
        if (isInViewport(div, 100)) {
            div.classList.add('animate');
        }
    });
});

// Tabs handling for Web Projects
document.addEventListener('DOMContentLoaded', function(){
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanels = document.querySelectorAll('.tab-panel');
  if(!tabButtons.length || !tabPanels.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById(target);
      if(panel) panel.classList.add('active');
    });
  });
});
