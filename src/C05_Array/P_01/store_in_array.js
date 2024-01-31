// Write a program to store elements in an array and print them.
// Test Data :
// Input 10 elements in the array :
// element - 0 : 1
// element - 1 : 1
// element - 2 : 2
// .......
// Expected Output :
// Elements in array are: 1 1 2 3 4 5 6 7 8 9

const array = []

const printElements = () => {
  for (let i = 0; i < 10; i++) {
    let input = prompt('Add a element: ')
    array.push(input)
  }
  console.log(`Elements in array are : ${array.join(' ')}`)
}

printElements()
