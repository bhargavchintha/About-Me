
    function openPrivacyPolicy() {
      const modal = document.getElementById('privacyModal');
      if (modal) {
        modal.style.display = 'block';
      }
    }

    function closePrivacyPolicy() {
      const modal = document.getElementById('privacyModal');
      if (modal) {
        modal.style.display = 'none';
      }
    }

    window.onclick = function(event) {
      const modal = document.getElementById('privacyModal');
      if (modal && event.target == modal) {
        modal.style.display = 'none';
      }
    };
 
