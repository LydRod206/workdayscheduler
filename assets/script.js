
$(document).ready(function () {
    
    $('.saveBtn').on('click', function(){
        var timeBlock = $(this).parent().attr('id');
        var userData = $(this).sibling('description').val();
        localStorage.setItem(timeBlock, userData);
    })
   
    var currentHour = dayjs();
    $('.time-block').each(function() {
        var timeID = $(this).attr('id');
        if(currentHour.isAfter(dayjs(timeID, 'hA'), 'hour')) {
            $(this).addClass('past').removeClass('present future');
        } else if(currentHour.isSame(dayjs(timeID, 'hA'), 'hour')) {
            $(this).addClass('present').removeClass('past future');
        } else {
            $(this).addClass('future').removeClass('past present');
        }
    });
    
    $('#hour9.description').val(localStorage.getItem('hour9'));
    $('#hour10.description').val(localStorage.getItem('hour10'));
    $('#hour11.description').val(localStorage.getItem('hour11'));
    $('#hour12.description').val(localStorage.getItem('hour12'));
    $('#hour13.description').val(localStorage.getItem('hour13'));
    $('#hour14.description').val(localStorage.getItem('hour14'));
    $('#hour15.description').val(localStorage.getItem('hour15'));
    $('#hour16.description').val(localStorage.getItem('hour16'));
    $('#hour17.description').val(localStorage.getItem('hour17'));
    

    var dateTime = dayjs().format('MMM D, YYYY h:mm A');
    $('#time').text(dateTime); 
  });
