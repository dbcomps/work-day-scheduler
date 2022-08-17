var currentDayTime = moment().format('MMMM Do YYYY, h:mm a');
console.log(currentDayTime);

$("#currentDay").html(currentDayTime);