function findMissingNumber(arr) {
    let n = arr.length + 1; // Including the missing number
    let totalSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    let actualSum = arr.reduce((sum, num) => sum + num, 0);
    return totalSum - actualSum;
}
console.log(findMissingNumber([1, 2, 3, 5])); // Output: 4