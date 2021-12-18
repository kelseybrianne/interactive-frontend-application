// Check for click events on the navbar burger icon
$(".navbar-burger").click(function () {
  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  $(".navbar-burger").toggleClass("is-active");
  $(".navbar-menu").toggleClass("is-active");
  });

/* Datepicker */
$( function() {
  displayEntry();
  $( "#datepicker" ).datepicker();
} );

let storedText = JSON.parse(localStorage.getItem("storedEntry")) || [];

$("#save-btn").on("click", function (event) {
  event.preventDefault();
  let date = $("#datepicker").val();
  let entry = $(this).siblings("#journal-entry").val();
  if(date == null || date==""){
    return false
  };
  if (entry == null || entry ==""){
    return false
  };
  
  let storedEntryObj = {
    'date': '',
    'entry': ''
  }
  storedEntryObj.date = date;
  storedEntryObj.entry = entry;
  storedText.push(storedEntryObj)
  localStorage.setItem("storedEntry", JSON.stringify(storedText));
  displayEntry();
  console.log(date);
  console.log(entry);
});

function displayEntry(){
  $('#entry-list').empty();
  for (let i = 0; i < storedText.length; i++) {
    let dateText = storedText[i].date;
    let entryText = storedText[i].entry;
   
    let row = document.createElement("tr") 
    let colDate = document.createElement("td") 
    let colEntry = document.createElement("td") 
    
    colDate.innerHTML = dateText
    colEntry.innerHTML = entryText;

    row.append(colDate, colEntry);
    $('#entry-list').append(row)
  }
}

function convertDate(d) {
  var p = d.split("/");
  return +(p[2]+p[1]+p[0]);
}

function sortByDate() {
  var tbody = document.querySelector("#entry-list");
  // get trs as array for ease of use
  var rows = [].slice.call(tbody.querySelectorAll("tr"));
  
  rows.sort(function(a,b) {
    return convertDate(a.cells[0].innerHTML) - convertDate(b.cells[0].innerHTML);
  });
  
  rows.forEach(function(v) {
    tbody.appendChild(v); // note that .appendChild() *moves* elements
  });
}

document.getElementById("jbtn").addEventListener("click", sortByDate);