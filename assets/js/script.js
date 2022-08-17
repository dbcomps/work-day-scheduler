var currentDayTime = moment().format('MMMM Do YYYY');
console.log(currentDayTime);

$("#currentDay").html(currentDayTime);

// this uses 24 hours so time block need to be id in 24 hours
var currentHour = moment().hour();
console.log(currentHour);

$(".time-block").each(function() {
	// go through all the time-block class elements and get the hour for that time block
	// added an id to uniquely identify each time-block and convert to integer
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