// Write a C program to calculate the distance between two points.
// Test Data :
// Input x1: 25
// Input y1: 15
// Input x2: 35
// Input y2: 10
// Expected Output:
// Distance between the said points: 11.1803


function calculatedistance (x1,x2,y1,y2) {
  const distanceX = x2 - x1;
  const distanceY = y2 - y1;
  const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  return distance;
}

const x1 = parseFloat(prompt('Input x1:'))
const y1 = parseFloat(prompt('Input y1:'))
const x2 = parseFloat(prompt('Input x2:'))
const y2 = parseFloat(prompt('Input y2:'))

const result = calculatedistance (x1,x2,y1,y2);

console.log('Distance between the said points: ' + result.toFixed(4));
