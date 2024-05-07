document.addEventListener("DOMContentLoaded", function() {
    const closeButton = document.getElementById("closeButton");
    const formSubmit = document.querySelector(".Form_Submit");
    
    closeButton.addEventListener("click", function() {
        formSubmit.style.display = "none";
    });
});
// this is for after submit form 
