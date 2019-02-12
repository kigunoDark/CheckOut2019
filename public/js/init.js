(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function() {
  $(".menu").click(function(e) {
    var linkHref = $(this).attr("href");
    console.log($(linkHref).offset().top);
    $("html, body").animate(
      {
        scrollTop: $(linkHref).offset().top
      },
      1200
    );
    e.preventDefault();
  });
});

$(document).ready(function(){
  $('.modal').modal();
});

$(document).ready(function() {
  if (
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        $(".navAnim").addClass("blackNav");
      } else {
        $(".navAnim").removeClass("blackNav");
      }
    })
  );
});

$('.dropdown-trigger').dropdown({
  closeOnClick: false,
  
});