// Write a program  to display the first 10 natural numbers.
// Expected Output :
// 1 2 3 4 5 6 7 8 9 10


function displayFirst10Numbers() {
  const result = [];

  for (let i = 1; i <= 10; i++) {
    result[i - 1] = i;
  }

  return result;
}

