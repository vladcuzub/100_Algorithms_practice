// #Write a C program to compute the perimeter and area of a rectangle with a height of 7 inches and width of 5 inches.
// Expected Output : Perimeter of the rectangle = 24 inches
//  Area of the rectangle = 35 square inches

#include <stdio.h>

int height;
int width;

int perimeterRectangle;
int areaRectangle;

int main()
{
  height = 7;
  width = 5;

  perimeterRectangle = (height + width) * 2;
  areaRectangle = height * width;

  printf("Perimeter of the rectangle = %d inches \n", perimeterRectangle);
  printf("Area of the rectangle = %d square inches \n", areaRectangle);
}
