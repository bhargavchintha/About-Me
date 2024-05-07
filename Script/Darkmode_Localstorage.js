window.onload = function() {
    const isDarkMode = localStorage.getItem("darkMode");
    const element = document.body;
  
    // Check if dark mode preference is explicitly set to true
    if (isDarkMode === "true") {
      element.classList.add("dark-side");
    } else {
      element.classList.remove("dark-side"); // Ensure light mode by default
    }
  };
  
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-side");
  
    const isDarkMode = element.classList.contains("dark-side");
    localStorage.setItem("darkMode", isDarkMode);
  }