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