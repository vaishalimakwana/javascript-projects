let arr = [1,1,1,2,2,2,2,3,3,3,4,5,6,6,6,7,7,7]

let newarr = new Set(arr);

let removeDup = [...newarr];
console.log(removeDup);

function removeDuplicates(arr){
    return [...new Set(arr)];
}
console.log(removeDuplicates([1,1,2,2,3,3,3,4,4,4,5,5,5]));
console.log(removeDuplicates([2,2,3,3,4,4,5,5]).reverse());


// Find Duplicates
const arr = [1,2,2,3,3,4,4,5,5];
const findDups = arr.filter( (ele, index) => arr.indexOf(ele) !== index); 
console.log(findDups);
