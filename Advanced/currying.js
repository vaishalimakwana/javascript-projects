// Currying is a technique in functional programming where a function takes one
//  argument at a time and returns another function until all arguments are provided.
// 1
function add(a) {
    return function (b) {
      return a + b;
    };
  }
  
  const add5 = add(5);
  console.log(add5(3));  // Output: 8
  console.log(add(2)(4));  // Output: 6

  // 2
  function multiply(a, b) {
    return a * b;
  }
  
  // Curried version
  function curriedMultiply(a) {
    return function (b) {
      return a * b;
    };
  }
  
  const double = curriedMultiply(2);
  console.log(double(5));  // Output: 10

  // 3 currying and recursion
  function sum(a) {

    function inner(b){
         return sum(a + b);
   }
   
   inner.done = function() {
   return a;
   
    }
    return inner;
   }
   console.log(sum(3)(6));
   console.log(sum(3)(6)(5)(2)(1).done());
     //sum(3)(6) // output
   //sum(3)(6)(5)(2)(1).done()