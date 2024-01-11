// #Write a C program to compute the perimeter and area of a rectangle with a height of 7 inches and width of 5 inches.
// Expected Output : Perimeter of the rectangle = 24 inches
//  Area of the rectangle = 35 square inches


function areaRectangle(height, width) {
  let area = height * width

  return area
}


function perimeterRectangle(height, width) {
  let perimeter = (height + width) * 2
  
  return perimeter
}


console.log(areaRectangle(7, 5))
console.log(perimeterRectangle(7, 5))