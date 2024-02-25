/* 2. Write a program to calculate the sum of starts from 1 to n using recursion.
Test Data :
Input the last start of the range starting from 1 : 5
Expected Output:

The sum of starts from 1 to 5 : 
15*/


function calculateSum(start, end) {
    let sum = 0;

    function addSum(n) {
        if (n > end) {
            return
        }
        sum += n
        addSum(n + 1)
    }
    addSum(start)
    return sum
}

module.exports = calculateSum