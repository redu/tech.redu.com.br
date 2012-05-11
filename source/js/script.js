/* Author: Redu educational technologies */

$(document).ready(function(){
    $(".nav a, .redu-tech-nav a").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
});
