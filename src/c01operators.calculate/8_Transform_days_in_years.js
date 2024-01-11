// #Write a C program to convert specified days into years, weeks and days.
// Note : Ignore leap year.
// Test Data : Number of days : 1329 Expected Output : Years : 3 Weeks : 33 Days : 3

let daysInYear = 365;
let daysInWeek = 7


function calculateYears(inputDays) {
  let years = inputDays / daysInYear

  return parseFloat(years.toFixed(1));
}

function calculateWeeks(inputDays) {
  let remainingDays = inputDays % daysInYear;
  let weeks = remainingDays / daysInWeek

  return parseFloat(weeks.toFixed(0));
}

function calculateRestDays(remainingDays) {
  let restDays = remainingDays % daysInWeek;
  return restDays
}


console.log(calculateYears(1329))
console.log(calculateWeeks(1329))
console.log(calculateRestDays(234))