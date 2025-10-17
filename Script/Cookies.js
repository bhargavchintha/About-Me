
    // jQuery Code (Will fail if jQuery is not properly loaded or there's no element with the specified class)
    $(document).ready(function() {
      $(".cookie-acc-closebtn").click(function() {
        $(".cookie-acc-container").hide(); // This could fail if there's no element with the specified class
      });
    });

    // Vanilla JavaScript code
    const cookieAccContainer = document.querySelector(".cookie-acc-container");
    const cookieAccButton = document.querySelector(".cookie-acc-btn");

    // Potential error: Missing reference to `cookieAccButton`, which could cause a TypeError when adding event listener
    cookieAccButton.addEventListener("click", () => {
      cookieAccContainer.classList.remove("active");
      // Storing cookie agreement status in localStorage
      localStorage.setItem("bhargavPortfolioCookieAgreement", "true");
    });

    // Display cookie consent pop-up if not agreed already
    setTimeout(() => {
      // Potential error: `cookieAccContainer` might be null if element is missing in DOM
      if (!localStorage.getItem("bhargavPortfolioCookieAgreement")) {
        cookieAccContainer.classList.add("active");  // Might fail if `cookieAccContainer` is null
      }
    }, 100);
  