// #Write a C program to compute the perimeter and area of a circle with a given radius.
// Expected Output : Perimeter of the Circle = 37.680000 inches
//                       Area of the Circle = 113.040001 square inches

#include <stdio.h>

int main()
{

  int radius;
  float pi = 3.14;
  float perimeter, aria;

  printf("Introduce a radius: ");
  scanf("%d", &radius);

  perimeter = 2 * pi * radius;
  aria = pi * (radius * radius);

  printf("Perimeter of the Circle = %f inches \n ", perimeter);
  printf("Aria of the Circle = %f inches", aria);

  return 0;
}