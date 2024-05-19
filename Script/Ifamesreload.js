function closeTabfun() {
    // Reload the iframe by setting its source URL to the current source URL
    var iframe = document.getElementById("webPageFrame");
    iframe.src = iframe.src;
}