
// Mobile menu
$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
  });


  $("#on-hover").mouseenter( function() {
        $("#toggle").addClass("box-area");
        console.log("mouse enter");
  })
  $("#on-hover").mouseleave( function() {
        $("#toggle").removeClass("box-area");
        console.log("mouse gone");
  })