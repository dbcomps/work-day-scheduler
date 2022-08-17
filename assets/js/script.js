var currentDayTime = moment().format('MMMM Do YYYY');
console.log(currentDayTime);

$("#currentDay").html(currentDayTime);

// this uses 24 hours so time block need to be id in 24 hours
var currentHour = moment().hour();
console.log(currentHour);

$(".time-block").each(function() {
	// go through all the time-block class elements and get the hour for that time block
	// added an id to uniquely identify each time-block and convert string to integer
	var hourBlock = parseInt($(this).attr("id"));
	console.log(hourBlock);
	
	if (hourBlock < currentHour) {
		$(this).addClass("past");
	}
	else if (hourBlock > currentHour) {
		$(this).addClass("future");
	}
	else {
		$(this).addClass("present");
	}
})


$(document).ready(function() {

$(".saveBtn").on('click', function() {
	var blockText = $(this).siblings(".description").val();
	var blockHour = $(this).parent().attr("id");
	console.log(blockText);
	console.log(blockHour);
	
	localStorage.setItem(blockHour, blockText);
});

	$("#9 .description").val(localStorage.getItem("9"));
	$("#10 .description").val(localStorage.getItem("10"));
	$("#11 .description").val(localStorage.getItem("11"));
	$("#12 .description").val(localStorage.getItem("12"));
	$("#13 .description").val(localStorage.getItem("13"));
	$("#14 .description").val(localStorage.getItem("14"));
	$("#15 .description").val(localStorage.getItem("15"));
	$("#16 .description").val(localStorage.getItem("16"));
	$("#17 .description").val(localStorage.getItem("17"));
	
})