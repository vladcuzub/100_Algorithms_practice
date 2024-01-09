// #Write a C program to convert specified days into years, weeks and days.
// Note : Ignore leap year.
// Test Data : Number of days : 1329 Expected Output : Years : 3 Weeks : 33 Days : 3

// #include <stdio.h>


function convertDays(inputDays) {
  let daysInYear = 365;
  let daysInWeek = 7;

  let years = inputDays / daysInYear
  let remainingDays = inputDays % daysInYear;
  let weeks = remainingDays / daysInWeek

  let restDays = remainingDays % daysInWeek;
  console.log("Years: " + years + " Weeks: " + weeks + " Days: " + restDays);

  return {
    years: years,
      weeks: weeks,
        days: restDays
  };
}

console.log(convertDays(1329));


