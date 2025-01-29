function Block1(){
const arr = ['Tom', 'Bill', 'Harry', 'Nick'];
const arr2 = arr;  // Assigning arr2 to arr (not copying, but referencing the same array)
arr2.pop();  // Removes the last element of the Array

console.log('Array 1', arr);  // Output: ['Tom', 'Bill', 'Harry']
console.log('Array 2', arr2); // Output: ['Tom', 'Bill', 'Harry']
}
Block1();
function Block2(){
const arr = ['Tom', 'Bill', 'Harry', 'Nick'];
const arr2 = arr;  // Assigning arr2 to arr (not copying, but referencing the same array)
arr2.push('Jack');  // Adding 'Jack' to arr2, which also modifies arr

console.log('Array 1', arr);  // Output: ['Tom', 'Bill', 'Harry', 'Nick', 'Jack']
console.log('Array 2', arr2); // Output: ['Tom', 'Bill', 'Harry', 'Nick', 'Jack']
}
Block2();
function Block3(){
const arr = ['Tom', 'Bill', 'Harry', 'Nick'];
const arr2 = arr;  // Assigning arr2 to arr (not copying, but referencing the same array)
arr2.shift();  // Removes the first element of arr2, which also modifies arr

console.log('Array 1', arr);  // Output: ['Bill', 'Harry', 'Nick', 'Jack']
console.log('Array 2', arr2); // Output: ['Bill', 'Harry', 'Nick', 'Jack']
}
Block3();

function Block4(){
const arr = ['Tom', 'Bill', 'Harry', 'Nick'];
const arr2 = [...arr];  // Assigning arr2 to arr (not copying, but referencing the same array)
arr2.shift();  // Removes the first element of arr2 Only

console.log('Array 1', arr);  // Output: ['Tom', 'Bill', 'Harry', 'Nick']
console.log('Array 2', arr2); // Output:  'Bill', 'Harry', 'Nick']
}
Block4();

function Block5(){
const arr = ['Tom', 'Bill', 'Harry', 'Nick'];
const arr2 = [...arr];  // Assigning arr2 to arr (not copying, but referencing the same array)
arr2.unshift('Adam');  // add element in the beginning of an arr2 Only

console.log('Array 1', arr);  // Output: ['Tom', 'Bill', 'Harry', 'Nick']
console.log('Array 2', arr2); // Output: ["Adam", "Tom", "Bill", "Harry", "Nick"]
}
Block5();

function Block6(){
const arr = ['Tom', 'Bill', 'Harry', 'Nick'];
const arr2 = arr.slice(1,3); // Returns a Shallow Copy y of a portion of an
//array without modifying the original
const arr3 = arr2.slice(); // Returns a separate copy

const arr4 = Array.from(arr3); // Returns a separate copy 
arr4.push('Jack'); // modifies only arr4

console.log('Array 1', arr);  // Output: ['Tom', 'Bill', 'Harry', 'Nick']
console.log('Array 2', arr2); // Output:  'Bill', 'Harry']
console.log('Array 3', arr3); // Output:  'Bill', 'Harry']
console.log('Array 4', arr4); // Output:  'Bill', 'Harry','Jack']

}
Block6();

//  with Primitive Values (No Issues)
function Block7(){
const arr = ['Tom', 'Bill', 'Harry', 'Nick'];
const arr2 = arr.splice(1,3); // removes elements in array
const arr3 = arr2.splice(1,2, 'Harry Gone', 'Nick Gone')  //replaces elements in array


console.log('Array 1', arr);  // Output: ["Tom"]
console.log('Array 2', arr2); // Output:  ["Bill", "Harry Gone", "Nick Gone"]
console.log('Array 3', arr3); // Output: [ "Harry", "Nick"]

}
Block7();
