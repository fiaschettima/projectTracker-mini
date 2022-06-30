var timeHeading = $('#currentDay');
var currentTime = moment().format('LLLL');
timeHeading.text(currentTime);
$(function () {
    $('#dueDate').datepicker({
      changeMonth: true,
      changeYear: true,
    });
})