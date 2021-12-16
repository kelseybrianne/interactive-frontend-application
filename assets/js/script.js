const authorEl = document.getElementById('author');
const textEl =document.getElementById('text');
let quoteFade = document.getElementById("quoteAnimation")
let randomQuote

// Mobile menu
$(".navbar-burger").click(function () {
  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  $(".navbar-burger").toggleClass("is-active");
  $(".navbar-menu").toggleClass("is-active");
});

// Cube animation on "take me to the challenge" button
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

// Function to fetch and render quote from API 
function getQuote() {
  let quoteURL = "https://type.fit/api/quotes";
  fetch(quoteURL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.length);
    randomQuote = data[Math.floor(Math.random() * data.length)];
    console.log(randomQuote);
    textEl.innerHTML = randomQuote.text
    $("#quoteAnimation").fadeToggle(5000);
    authorEl.innerHTML = "-" + "  " + randomQuote.author + "  " + "-"
    if(randomQuote.author === null) {
      authorEl.innerHTML = "-" + "  " + "Unknown" + "  " + "-"}
    });
    return randomQuote
}

// Funtion for timer for quotes
setInterval(getQuote, 7000)













