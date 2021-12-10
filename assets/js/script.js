
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
        $("#toggle").removeClass("cube-down");
        $("#toggle").addClass("cube-up");
        console.log("mouse enter");
  })
  $("#on-hover").mouseleave( function() {
        $("#toggle").removeClass("cube-up");
        $("#toggle").addClass("cube-down");
        console.log("mouse gone");
  })