var typeValue="Any type";
var newActivity="";
var priceValue = "Any price range"
var minPrice = 0;
var maxPrice = 1;
var participantsValue = "Any number"
var activityArr = [];

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

// Get saved activities from local storage and render to page
var savedActivities = JSON.parse(localStorage.getItem("saved-activities"));
if (savedActivities !== null) {
    activityArr = savedActivities;
}

for (var i=0; i<activityArr.length; i++) {
                
    var savedActivity = 
    `<div class="card column m-5 is-one-quarter-desktop is-third-tablet saved-activity">
        <button id="#delete-btn" class="delete delete-btn"></button>
        <div class="card-content">
            <p class="content is-size-4 has-text-centered" style="line-height: 1.5">
                ${savedActivities[i]} 
            </p>
        </div>
    </div> `
    $("#saved-activity").append(savedActivity);
}

// Function pending for clicking dynamic button and deleting card
// $(document).on('click', '.delete-btn', function(){
//     console.log("Dynamic button clicked. Hurray!");
//     console.log($(this).parent());
//     $(this).parent().remove();
    
//     activityArr = activityArr.splice($(this).next().children(".content").html())
//     console.log(activityArr);
//     localStorage.setItem("saved-activities", JSON.stringify(activityArr))
//     console.log($(this).next().children(".content").html())
//   });

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
                        <button id="save" class="button is-link is-light is-rounded">Save</button>
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
        $("#new-activity").on("click", getActivity);

        // Save rendered activity to a card below the generator
        $("#save").on("click", function() {
            
            // Prevent activity from being saved more than once
            if(activityArr.includes(data.activity)) {
                return;
            }

            activityArr.push(data.activity);

            for (var i=0; i<activityArr.length; i++) {
                
                var savedActivity = 
                `<div class="card column m-5 is-one-quarter-desktop is-third-tablet saved-activity">
                    <div class="card-content">
                        <p class="content is-size-4 has-text-centered" style="line-height: 1.5">
                            ${activityArr[i]} 
                        </p>
                    </div>
                </div> `
            }
            
            $("#saved-activity").append(savedActivity);
            localStorage.setItem("saved-activities", JSON.stringify(activityArr))
        })
    })
}

// Make API call and add different query strings to it based on parameters the user chooses
function getActivity() {

    // Remove rendered activity before rendering a new one
    $("#remove-me").remove()

    var requestURL = `https://www.boredapi.com/api/activity?`;

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