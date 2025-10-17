const downloadBtn = document.getElementById("downloadBtn");
const progressBar = document.createElement("div");
const progressText = document.createElement("span");

progressBar.classList.add("progress-bar");
progressText.classList.add("progress-text");
downloadBtn.appendChild(progressBar);
downloadBtn.appendChild(progressText);

const downloadText = downloadBtn.querySelector(".download-cv-btn"); 

downloadBtn.addEventListener("click", function (e) {
  e.preventDefault(); 

  downloadText.style.transition = "opacity 0.3s ease-out"; 
  downloadText.style.opacity = 0; 

  downloadBtn.classList.add("loading");

  let progress = 0;
  let interval = setInterval(function () {

    progress += 1;

    progressBar.style.width = progress + "%";
    progressText.textContent = progress + "%";


    if (progress === 100) {
      clearInterval(interval);

      setTimeout(function () {
        window.location.href = downloadBtn.href; 
      }, 500);
    }
  }, 50); 
});