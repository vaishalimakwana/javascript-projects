const originalObj = { one: 1, two: 2 };
const clonedObj = { ...originalObj };
clonedObj.three = 3;  // Adding a new property to the cloned object

console.log(originalObj);  // Output: { one: 1, two: 2 }
console.log(clonedObj);    // Output: { one: 1, two: 2, three: 3 }

const obj = {
    a: 10,
    b: function () {
      console.log(this.a);
      const inner = () => {
        console.log(this.a);
      };
      inner();
    },
  };
  
  const c = obj.b;
  c(); // Output?
  obj.b(); // Output?