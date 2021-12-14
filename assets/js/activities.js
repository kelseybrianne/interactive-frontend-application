var typeValue="Any type";
var newActivity="";
var priceValue = "Any price range"
var minPrice = 0;
var maxPrice = 1;
var participantsValue = "Any number"


// Check for click events on the navbar burger icon
$(".navbar-burger").click(function () {
// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
$(".navbar-burger").toggleClass("is-active");
$(".navbar-menu").toggleClass("is-active");
});

// Hide "GENERATE IDEA" button when clicked
function removeBtn() {
    $("#generate-idea").addClass("hide");
}

// Fetch bored API data and render to page
var fetchActivity = function(requestURL) {
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        removeBtn();
      
        // Display "No activity found with the specified parameters" if it comes back as undefined
        if(data.activity) {
            newActivity= 
            `<div id="remove-me">
                <div class="card activity is-flex is-justify-content-center">
                    <div class="card-content">
                        <div class="content subtitle is-4">
                            ${data.activity}
                        </div>
                    </div>
                </div>
            
                <div class="field is-grouped mt-5 has-text-centered is-flex is-justify-content-center">
                    <div class="control">
                        <button id="new-activity" class="button is-light is-rounded">New activity</button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light is-rounded">Save</button>
                    </div>
                </div>
            </div>`
        
            $("#activityEl").append(newActivity)
        } else {
            var noActivity = 
            `<div id="remove-me">
                <div class="card activity is-flex is-justify-content-center has-background-info-light">
                    <div class="card-content">
                        <div class="content subtitle is-4 has-text-info">
                            No activity found with the specified parameters
                        </div>
                    </div>
                </div>
            
                <div class="field is-grouped mt-5 has-text-centered is-flex is-justify-content-center">
                    <div class="control">
                        <button id="new-activity" class="button is-light is-rounded">Try again</button>
                    </div>
                </div>
            </div>`
            
            $("#activityEl").append(noActivity);
        }

        // Add function to get new activity when "New activity" button is clicked
        $("#new-activity").on("click", function(){
            $("#remove-me").remove();
            getActivity();
        });
    })
}

// Make API call and add different query strings to it based on parameters the user chooses
function getActivity() {
    newActivity=""; 

    var requestURL = `http://www.boredapi.com/api/activity?`;

    if(typeValue !== "Any type") {
        requestURL += `type=${typeValue}`
    }
    
    if(priceValue !== "Any price range") {
        requestURL += `&minprice=${minPrice}&maxprice=${maxPrice}`
    } 

    fetchActivity(requestURL);
}

// Change URL for API call when the user changes desired activity type
$("#type").on("change", function(e) {
    typeValue = e.target.value.toLowerCase();
});

// Change URL for API call when the user changes desired price range
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
});

// Do something when user clicks "GENERATE IDEA" button
$("#generate-idea").on("click",getActivity);