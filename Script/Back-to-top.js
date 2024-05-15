var btn = $('#Top_Btn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '500');
});

// Add this part to hide the button when already at the top
$(document).ready(function() {
  if ($(window).scrollTop() <= 0) {
    btn.removeClass('show');
  }
});
