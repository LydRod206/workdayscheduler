// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    $('.saveBtn').on('click', function(){

    })
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    $('#hour9.description').val(localStorage.getItem('hour9'));
    $('#hour10.description').val(localStorage.getItem('hour10'));
    $('#hour11.description').val(localStorage.getItem('hour11'));
    $('#hour12.description').val(localStorage.getItem('hour12'));
    $('#hour13.description').val(localStorage.getItem('hour13'));
    $('#hour14.description').val(localStorage.getItem('hour14'));
    $('#hour15.description').val(localStorage.getItem('hour15'));
    $('#hour16.description').val(localStorage.getItem('hour16'));
    $('#hour17.description').val(localStorage.getItem('hour17'));
    // TODO: Add code to display the current date in the header of the page.
    var now = daysjs();
    var dateTime = now.format('MMM D, YYYY h:mm A');
    console.log(dateTime);
    $('#currentDay').text(dateTime); 
  });
