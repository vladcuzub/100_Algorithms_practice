/* 2. Write a program to calculate the sum of numbers from 1 to n using recursion.
Test Data :
Input the last number of the range starting from 1 : 5
Expected Output:

The sum of numbers from 1 to 5 : 
15*/


function calculateSum(number, limit) {
    let sum = 0;

    function addSum(n) {
        if (n > limit) {
            return
        }
        sum += n
        addSum(n + number)
    }
    addSum(number)
    return sum
}

module.exports = calculateSum