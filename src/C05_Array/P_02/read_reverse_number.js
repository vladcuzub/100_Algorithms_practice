// Write a program in C to read n number of values in an array and display them in reverse order.
// Test Data :
// Input the number of elements to store in the array :3
// Input 3 number of elements in the array :
// element - 0 : 2
// element - 1 : 5
// element - 2 : 7
// Expected Output :
// The values store into the array are :
// 2 5 7
// The values store into the array in reverse are :
// 7 5 2

const array = []

const addElementsInArray = () => {
  for (let i = 0; i < 3; i++) {
    let element = prompt('Add a element: ')
    array.push(element)
  }

  console.log(`The values store into the array are : ${array.join(' ')}`)
  console.log(`The values store into the array in reverse are : ${array.reverse().join(' ')}`)
}

addElementsInArray()
