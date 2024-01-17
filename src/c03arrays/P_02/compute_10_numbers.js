// Write a C program to compute the sum of the first 10 natural numbers.
// Expected Output :
// The first 10 natural number is :
// 1 2 3 4 5 6 7 8 9 10
// The Sum is : 55

const calculate10naturlaNumbers = () => {
  let sum = 0;
  console.log('The first 10 natural number is :')

  for (let i = 1; i <= 10; i++) {
    console.log(i);
    sum += i;
  }

  console.log('The Sum is: ' + sum);
}

calculate10naturlaNumbers()
