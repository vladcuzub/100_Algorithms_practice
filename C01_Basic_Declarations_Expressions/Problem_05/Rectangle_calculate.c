// #include <stdio.h>

// int main()
// {
//   int height = 7;
//   int width = 5;

//   int perimeterRectangle = (height + width) * 2;
//   int areaRectangle = height * width;

//   printf("Perimeter of the rectangle = %d inches \n" , perimeterRectangle);
//   printf("Area of the rectangle = %d square inches \n", areaRectangle);
// }

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
