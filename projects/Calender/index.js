// Taking references of date, day, month, year, current date
let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

let currTime = new Date();
// Setting date
date.innerHTML = currTime.getDate();

// Setting day
if (currTime.getDay() == 1) {
  day.innerHTML = "Monday";
} else if (currTime.getDay() == 2) {
  day.innerHTML = "Tuesday";
} else if (currTime.getDay() == 3) {
  day.innerHTML = "Wednesday";
} else if (currTime.getDay() == 4) {
  day.innerHTML = "Thursday";
} else if (currTime.getDay() == 5) {
  day.innerHTML = "Friday";
} else if (currTime.getDay() == 6) {
  day.innerHTML = "Saturday";
} else {
  day.innerHTML = "Sunday";
}

// Setting month
if (currTime.getMonth() == 0) {
  month.innerHTML = "January";
} else if (currTime.getMonth() == 1) {
  month.innerHTML = "February";
} else if (currTime.getMonth() == 2) {
  month.innerHTML = "March";
} else if (currTime.getMonth() == 3) {
  month.innerHTML = "April";
} else if (currTime.getMonth() == 4) {
  month.innerHTML = "May";
} else if (currTime.getMonth() == 5) {
  month.innerHTML = "June";
} else if (currTime.getMonth() == 6) {
  month.innerHTML = "July";
} else if (currTime.getMonth() == 7) {
  month.innerHTML = "August";
} else if (currTime.getMonth() == 8) {
  month.innerHTML = "September";
} else if (currTime.getMonth() == 9) {
  month.innerHTML = "October";
} else if (currTime.getMonth() == 10) {
  month.innerHTML = "November";
} else {
  month.innerHTML = "December";
}

// Setting year
year.innerHTML = currTime.getFullYear();
