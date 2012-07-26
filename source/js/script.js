/* Author: Redu educational technologies */

$(document).ready(function(){
    $(".nav a, .redu-tech-nav a").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });

    $(".team img").each(function() {
      var img = $(this),
          a = img.parents().siblings("h5").children("a"),
          ln = a.children(".ln")
      img.mouseover(function() {
        a.addClass('link-hover')
        ln.addClass('link-hover')
      })
      img.mouseout(function() {
        a.removeClass('link-hover')
        ln.removeClass('link-hover')
      })
    })
});


