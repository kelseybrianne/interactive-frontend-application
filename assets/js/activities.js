var requestURL

var fetchActivity = function() {
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
}

function getActivity() {

    requestURL = `http://www.boredapi.com/api/activity/`;
    fetchActivity();

}

getActivity();
