document.addEventListener('DOMContentLoaded', function() {
    const menuTrigger = document.getElementById('menuTrigger');
    const navItems = document.querySelectorAll('.Header-Files .NAV-Items');
    const menuIcon = document.querySelector('.nav_ico i');
  
    // Function to toggle menu icon
    function toggleMenuIcon() {
      if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
      } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
      }
    }
  
    
    function closeMenu() {
      if (window.innerWidth <= 900) {
        menuTrigger.checked = false; 
        if (menuIcon.classList.contains('fa-bars')) {
          toggleMenuIcon(); 
        }
      }
    }
  
  
    menuIcon.addEventListener('click', toggleMenuIcon);
  
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        closeMenu();
        toggleMenuIcon(); 
      });
    });
  });