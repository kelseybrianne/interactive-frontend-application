/* Datepicker */
$( function() {
  $( "#datepicker" ).datepicker();
} );


// function saveJournalEntry () {
//     var entry = document.getElementById('journal-entry').value();
//     if(entry !== '') {
//         var journalEntry = JSON.parse(window.localStorage.getItem('journalEntry')) || [];
//         var savedEntry = {
//             date: date
//             entry: entry
//         }
//         journalEntry.push(savedEntry)
//         window.localStorage.setItem('journalEntry', JSON.stringify(journalEntry));
//     }
// }

$("#save-btn").on("click", function (event) {
    event.preventDefault();
    var entry = $(this).siblings("#journal-entry").val();
    var date = $("#datepicker").val();
    localStorage.setItem("entry", entry);
    localStorage.setItem("date", date);

    console.log(date);
    console.log(entry);
  });