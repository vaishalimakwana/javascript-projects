const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  
  const getNames = users.map(user => user.name);
  console.log(getNames);
  

  let arr = [3,4,5,6];

  let changeArr = arr.map(multiply => multiply * 3);
  
  console.log(changeArr);  

  let arr = [3,4,5,6];

// let changeArr = arr.map(function (element){
//   return element * 3
//   });

// console.log(changeArr);

// Check conversion rates
const INR = [10,20,30];
const RateofUSD = 86.58 ; //1 USD = 86 INR;

const RatesinINR = INR.map(price => price * RateofUSD);
console.log(RatesinINR);

//  Append a String to Each Element
const fruits = ['Apple', 'Mango', 'Cherry', 'Strawberry', 'Watermelon', 'Guava'];

const newfruits = fruits.map(fruit => 'My favorite fruits are ' + fruit);

console.log(newfruits);

//  Convert an Array of Strings to Uppercase
const names = ['john', 'doe', 'smith'];
const uppercaseNames = names.map(name => name.toUpperCase());

console.log(uppercaseNames);  // Output: ['JOHN', 'DOE', 'SMITH']

//  Create an Array of Employee Salaries with 10% Increment
const employees = [
    { name: 'Alice', salary: 50000 },
    { name: 'Bob', salary: 60000 }
  ];
  
  const empAppraisal = employees.map(changesalary => ({
  name: changesalary.name,
  salary: changesalary.salary * (10 / 100) + changesalary.salary
   }));
  
  console.log(empAppraisal);

  //  Convert an Array of Numbers to Boolean Values
  const numbers = [1, 0, -5, 3, null];

const booleanValues = numbers.map(num => Boolean(num));

console.log(booleanValues); // Output: [true, false, true, true, false]

// Get the Length of Each Word in an Array
const words = ['hello', 'world', 'JavaScript'];

const getLength = words.map( word => word.length);

console.log(getLength);

// Convert an Array of Objects into an Array of Strings
const products = [{name: 'Laptop', price: 100} , {name: 'Phone', price: 500}];

const changeString = products.map(product => `${product.name} costs Rs. ${product.price}`);

console.log(changeString); // Output: ['Laptop costs $1000', 'Phone costs $500']

// Get emps based on seleted department
const emps = [
  { name: 'Alice', dept: 'HR', sal: 20000 },
  { name: 'Bob', dept: 'Engg', sal: 50000 },
  { name: 'Charlie', dept: 'HR', sal: 20000 }
];


const getHR = emps.filter( employees => employees.dept === 'HR')
.map(employees => ({ 
name: employees.name,
dept: employees.dept
}));
console.log(getHR);