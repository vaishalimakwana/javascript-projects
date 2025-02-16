function arrReverse(arr){
    let start = 0 , end = arr.length -1;
    while(start < end){
        [arr[start],arr[end]] = [arr[end],arr[start]];
        start++;
        end --;
    }
    console.log('start is',start);
    console.log('end is',end)
    return arr;
    
    
}
//arrReverse([1,2,3,4,5]);

console.log("Reverse", arrReverse([1, 2, 3, 4]));

function reverse(array) {
    var output = [];
    while (array.length) {
      output.push(array.pop());
    }
  
    return output;
  }
  
  console.log(reverse([1, 2, 3, 4, 5, 6, 7]));

  // 3
  const arr = [1, 2, 3, 4, 5, 6, 7];
const tempArr = [];
const reversearr = () => {
 
    while (arr.length > 0) {
        tempArr.push(arr.pop());
    }
      arr.push(...tempArr); 
};

reversearr();
console.log('Arr', arr);  // Output: [7, 6, 5, 4, 3, 2, 1]