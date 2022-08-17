var currentDayTime = moment().format('MMMM Do YYYY');
console.log(currentDayTime);

$("#currentDay").html(currentDayTime);

var currentHour = moment().hour();
console.log(currentHour);

$(".time-block").each(function() {
	// go through all the time-block class elements and get the hour for that time block
	// added an id to uniquely identify each time-block
	var hour = parseInt($(this).attr("id"));
	console.log($(this).attr("id"));
	
	console.log(hour);
	
	
	
})