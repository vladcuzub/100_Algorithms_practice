// Write a  program to read a password until it is valid. For wrong password print "Incorrect password" and for correct password print, "Correct password" and quit the program. The correct password is 1234.
// Test Data :
// Input the password: 1234
// Expected Output:
// Correct password

function checkPassword(userInput,password) {
    let result;
    if (userInput === password) {
        result = 'Password is correct';
    } else {
        result = 'Password is incorrect';
    }
    return result;
}


module.exports = checkPassword