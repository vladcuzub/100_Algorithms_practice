// Write a C program that accepts an employee's ID, total worked hours in a month and the amount he received per hour. Print the ID and salary (with two decimal places) of the employee for a particular month. Test Data : Input the Employees ID(Max.10 chars) : 0342 Input the working hrs : 8 Salary amount / hr : 15000 Expected Output : Employees ID = 0342 Salary = U$ 120000.00

// #include <stdio.h>

// int main()
// {

//   char id[10];
//   int hour;
//   double salaryMonth, salary;

//   printf("Input the Employees ID(Max. 10 chars):");
//   scanf("%9s", &id);

//   printf("\nInput the working hrs:");
//   scanf("%d", &hour);

//   printf("\nSalary amount/hr:");
//   scanf("%lf", &salary);

//   salaryMonth = hour * salary;
//   printf("Employees ID =%s\n Salary = U$%.2lf ", id, salaryMonth);

//   return 0;
// }

function salaryPerMonth(workedHours, salaryPerHour) {

  let resultSalary = workedHours * salaryPerHour
  return  parseInt(resultSalary.toFixed(2))
}
console.log(salaryPerMonth(8,15000))