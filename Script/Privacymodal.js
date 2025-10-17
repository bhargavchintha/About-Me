function openPrivacyPolicy() {
  document.getElementById('privacyModal').style.display = 'block';
}
function closePrivacyPolicy() {
  document.getElementById('privacyModal').style.display = 'none';
}
window.onclick = function(event) {
  var modal = document.getElementById('privacyModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};