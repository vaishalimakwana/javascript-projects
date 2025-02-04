function findLargestAndSmallest(arr){
    let largest = Math.max(...arr); // Spread operator expands array into individual numbers
    let smallest = Math.min(...arr); // Spread operator expands array into individual numbers
    return{largest,smallest};
}
console.log(findLargestAndSmallest([10,20,30,40,50,1,0,100]));

// The Math.max() function expects individual numbers as arguments, not an array.
// When you pass an array directly (Math.max(arr)), JavaScript does not automatically spread the array, so it treats the array as a single argument.
// Since Math.max() does not accept arrays, it returns NaN (Not a Number).

const maxNum = arr.reduce((max, num) => num > max ? num : max, arr[0]);
console.log(maxNum); // ✅ Output: 10

// Find second largest value in an Array
const arr = [2, 3, 4, 5, 6, 8, 9, 10];

const maxNum = Math.max(...arr); // Find the largest number
const secondLargest = Math.max(...arr.filter(num => num !== maxNum)); // Remove max & find next max

console.log(secondLargest); // Output: 9
