const finalQuote = document.getElementById("quote");
// Mobile menu
let randomQuote
$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});

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
      });
      return randomQuote
  }
  
  getQuote()
  // .then((data)=>{
  //   displayQuote(data)

  // });



