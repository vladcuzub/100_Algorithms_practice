// #Write a C program to convert specified days into years, weeks and days.
// Note : Ignore leap year.
// Test Data : Number of days : 1329 Expected Output : Years : 3 Weeks : 33 Days : 3

#include <stdio.h>

int main()
{
  int inputDays, years, weeks, restDays;

  inputDays = 1329;
  years = inputDays / 365;
  weeks = (inputDays % 365) / 7;
  restDays = inputDays - ((years * 365) + (weeks * 7));

  printf("Years :%d \n", years);
  printf("Weeks :%d \n", weeks);
  printf("Days :%d \n", restDays);

  return 0;
}
