let quotesRandom = []
const finalQuote = document.getElementById("quote");
// Mobile menu
$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
  function getQuote() {
    let quoteURL = "https://type.fit/api/quotes";
    fetch(quoteURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        quotesRandom.push(data);
      });
  }
  getQuote();
  console.log(quotesRandom);
    // displayQuote()
    let result = finalQuote.map(({ foo }) => foo)

});

// Just in case anyone wanted to take a look here's the link and function to the original API
// let quoteURL = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?'
// function getQuote (){
//  fetch(quoteURL
//     , {mode: 'no-cors'}
//  )
//  .then(function(response){
//     console.log(response.ok);
//     return response.json();
//  })
//  .then(function(data){
//      console.log(data)
//  });
// }
// getQuote()
