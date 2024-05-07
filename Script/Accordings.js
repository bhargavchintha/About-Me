var acc = document.getElementsByClassName("Img-About-Web");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.querySelector(".panel");
    
    if (panel.style.display === "block") {
      panel.style.display = "nne";
    } else {
      panel.style.display = "block";
    }
  });

 
  var closeBtns = acc[i].querySelectorAll(".back-btn");
  for (var j = 0; j < closeBtns.length; j++) {
    closeBtns[j].addEventListener("click", function(event) {
      event.stopPropagation(); 
      var panel = this.closest(".panel");
      panel.style.display = "none";
    });
  }
}