//  Write a  program that checks if a given non-negative number is a multiple of 3 or 7, but not both.
// Expected Output:

// 1
// 1
// 0

function multipleNumber(inputNumber) {
  if ((inputNumber % 3 === 0 || inputNumber % 7 === 0) && !(inputNumber % 3 === 0 && inputNumber % 7 === 0)) {
    return true;
  } else {
    return false;
  }
}

