// Give a list of even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8]


// Filtering Employees with Salary > 40,000
const employees = [
    { name: 'Alice', salary: 50000 },
    { name: 'Bob', salary: 30000 },
    { name: 'Charlie', salary: 60000 },
    { name: 'David', salary: 25000 }
  ];
  
  const salary = employees.filter( emp => emp.salary > 40000);
  console.log(salary);

  // Get Array elements over 18
  const people = [
    { name: 'John', age: 16 },
    { name: 'Sara', age: 21 },
    { name: 'Mike', age: 18 },
    { name: 'Anna', age: 15 }
  ];
  
  const overEighteen = people.filter(getage => getage.age >= 18);
  console.log(overEighteen);
  
  //  Filtering Out Null, Undefined & Empty Values
const mixedArray = [0, 'hello', '', null, undefined, 'world', false];
const truthyValues = mixedArray.filter(Boolean);
console.log(truthyValues);  // Output: ['hello', 'world']
//  Using Boolean as a callback removes falsy values (0, null, undefined, '', false).