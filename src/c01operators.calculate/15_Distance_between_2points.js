// Write a C program to calculate the distance between two points.
// Test Data :
// Input x1: 25
// Input y1: 15
// Input x2: 35
// Input y2: 10
// Expected Output:
// Distance between the said points: 11.1803


function distanceOfTwoPoints (x1,x2,y1,y2) {
  let distance = ((x2 - x1) ** 2) + ((y2 - y1) ** 2)
  return distance;
}
console.log(distanceOfTwoPoints(25,15,35,10))



