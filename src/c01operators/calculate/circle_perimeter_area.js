// Write a program to compute the perimeter and area of a circle with a given radius.
// Expected Output : Perimeter of the Circle = 37.680000 inches
//                       Area of the Circle = 113.040001 square inches


function perimeterOfCircle(radius) {
  let pi = 3.14

  let perimeter = 2 * pi * radius

  return perimeter
}

function areaOfCircle(radius) {
  let pi = 3.14

  let area = pi * (radius * radius)

  return area
}
