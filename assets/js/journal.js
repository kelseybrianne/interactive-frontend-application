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
  }
}