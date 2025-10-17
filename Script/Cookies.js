$(document).ready(function() {
    $(".cookie-acc-closebtn").click(function() {
      $(".cookie-acc-container").hide();
    });
  });

  const cookieAccContainer = document.querySelector(".cookie-acc-container");
  const cookieAccButton = document.querySelector(".cookie-acc-btn");

  cookieAccButton.addEventListener("click", () => {
    cookieAccContainer.classList.remove("active");
    // Store cookie agreement status in localStorage
    localStorage.setItem("bhargavPortfolioCookieAgreement", "true");
  });

  // Display cookie notice only if user hasn't accepted cookies yet
  setTimeout(() => {
    if (!localStorage.getItem("bhargavPortfolioCookieAgreement")) {
      cookieAccContainer.classList.add("active");
    }
  }, 100);