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
    let entry = $(this).siblings("#journal-entry").val();
    let date = $("#datepicker").val();
    
    let storedEntryObj = {
      'entry': '',
      'date': ''
    }
    storedEntryObj.entry = entry;
    storedEntryObj.date = date;
    storedText.push(storedEntryObj)
    console.log('storedText', storedText)
    localStorage.setItem("storedEntry", JSON.stringify(storedText));
    displayEntry();
    console.log(date);
    console.log(entry);
  });

function displayEntry(){
  $('#entry-list').empty();
  var email = document.getElementById("email");
  var print = document.getElementById("printButton")
  for (let i = 0; i < storedText.length; i++) {
    let entryText = storedText[i].entry;
    let dateText = storedText[i].date;
   
    let row = document.createElement("tr") 
    let colEntry = document.createElement("td") 
    let colDate = document.createElement("td") 
    
    colEntry.innerHTML = entryText;
    colDate.innerHTML = dateText

    row.append(colDate, colEntry);
    $('#entry-list').append(row)
    console.log(entryText);

  }
  email.onclick = function(){
    let emailText = JSON.stringify(JSON.parse(localStorage.getItem("storedEntry")), null , 4);
    window.open('mailto:test@example.com?body=' + emailText);
  }

  print.onclick = function(){
    let printText = JSON.stringify(JSON.parse(localStorage.getItem("storedEntry")), null , 4);
    let WinPrint = window.open('', '', 'width=900,height=650');
    WinPrint.document.write(printText);
    WinPrint.print();
    WinPrint.close();
  }

}


