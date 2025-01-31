function findLargestAndSmallest(arr){
    let largest = Math.max(...arr); // Spread operator expands array into individual numbers
    let smallest = Math.min(...arr); // Spread operator expands array into individual numbers
    return{largest,smallest};
}
console.log(findLargestAndSmallest([10,20,30,40,50,1,0,100]));