// Check for click events on the navbar burger icon
$(".navbar-burger").click(function () {
// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
$(".navbar-burger").toggleClass("is-active");
$(".navbar-menu").toggleClass("is-active");
});


function removeBtn() {
    $("#generate-idea").addClass("hide");
}


var fetchActivity = function(requestURL) {
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        removeBtn();
        console.log(data.activity);
        var newActivity= `<div class="card activity is-flex is-justify-content-center">
        <div class="card-content">
          <div class="content subtitle is-4">
            ${data.activity}
          </div>
        </div>
      </div>
    
      <div class="field is-grouped mt-5 has-text-centered is-flex is-justify-content-center">
        <div class="control">
          <button class="button is-light is-rounded">New activity</button>
        </div>
        <div class="control">
          <button class="button is-link is-light is-rounded">Save</button>
        </div>
      </div>`
    
        $("#activityEl").append(newActivity)
    })
}

function getActivity() {

    var requestURL = `http://www.boredapi.com/api/activity?`;

    if(typeValue !== "Any type") {
        requestURL += `type=${typeValue}`
    }
    
    if(priceValue !== "Any price range") {
        requestURL += `&minprice=${minPrice}&maxprice=${maxPrice}`
    } 

    // if(priceValue !== "Any price range") {
    //     requestURL += `&participants=${participantsValue}`
    // }

    fetchActivity(requestURL);

}

$("#generate-idea").on("click",getActivity);

var typeValue="Any type";

$("#type").on("change", function(e) {
    typeValue = e.target.value.toLowerCase();
});

var priceValue = "Any price range"
var minPrice = 0;
var maxPrice = 1;
$("#price").on("change", function(e) {
    priceValue = e.target.value;

    if(priceValue === "Free") {
        minPrice = 0;
        maxPrice = 0;
    }
    if(priceValue === "On a budget") {
        minPrice = .1;
        maxPrice = .3;
    }
    if(priceValue === "Spendy") {
        minPrice = .4;
        maxPrice = 1;
    }

    console.log(minPrice + "and" + maxPrice)
});

var participantsValue = "Any number"
$("#participants").on("change", function(e) {
    participantsValue = e.target.value.toLowerCase();
});
