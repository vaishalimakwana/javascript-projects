function findLargestAndSmallest(arr){
    let largest = Math.max(...arr);
    let smallest = Math.min(...arr);
    return{largest,smallest};
}
console.log(findLargestAndSmallest([10,20,30,40,50,1,0,100]));