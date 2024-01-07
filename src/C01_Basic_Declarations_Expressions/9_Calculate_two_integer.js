// Write a C program that accepts two integers from the user and calculates the sum of the two integers.Test Data : Input the first integer : 25 Input the second integer : 38 Expected Output : Sum of the above two integers = 63

#include <stdio.h>

int main()
{

  int firstNumber, secondNumber, sumNumbers;

  printf("Input the first integer: \n");
  scanf("%d", &firstNumber);

  printf("Input the second integer: \n");
  scanf("%d", &secondNumber);
  sumNumbers = firstNumber + secondNumber;

  printf("Sum of the above two integers= %d", sumNumbers);

  return 0;
}