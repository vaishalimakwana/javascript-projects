var str = "Nick";

const arr = [...str];

const newarr = []
while(arr.length){
newarr.push(arr.pop());
}
console.log(newarr);

var output = newarr.toString();

console.log(output);
