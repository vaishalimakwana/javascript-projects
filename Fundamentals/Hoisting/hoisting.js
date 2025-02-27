// #Problem 1
console.log(a);  
var a = 10;
function test() {
    console.log(b);
    var b = 20;
}
test();


// #Problem 2
myFun();

var myFun = function() {
    console.log("One");
};

myFun();

function myFun() {
    console.log("Two");
}

myFun();

// #Problem 3
console.log(foo); // give the entire function
var foo = "bar";
function foo() {
    console.log("Hello");
}
console.log(foo);

// #Problem4
console.log(x);
let x = 10;
console.log(y);
const y = 20;

// #Problem5

var a = 1;

function outer() {
    console.log(a);
    var a = 2;
    function inner() {
        console.log(a);
    }
    inner();
}

outer();

// #Problem6

var xy = 1;

function test() {
    console.log(xy); // First console.log
    if (false) {
        var xy = 2;
    }
    console.log(xy); // Second console.log
}
test();

// #Problem7

console.log('A');

setTimeout(() => {
  console.log('B');
  Promise.resolve().then(() => {
    console.log('C');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('D');
  setTimeout(() => {
    console.log('E');
  }, 0);
});

console.log('F');

// 7 Promise Chaining with setTimeout

console.log('1');

setTimeout(() => {
  console.log('2');
  Promise.resolve().then(() => {
    console.log('3');
  }).then(() => {
    console.log('4');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('5');
}).then(() => {
  console.log('6');
});

console.log('7');

// 8 Mixing Promise Resolution with Delays

console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
  setTimeout(() => {
    console.log('Timeout 2');
  }, 0);
  return Promise.resolve();
}).then(() => {
  console.log('Promise 2');
});

console.log('End');

// 9 Deeply Nested Promises in a Timer

setTimeout(() => {
    console.log('Timer 1');
    Promise.resolve().then(() => {
      console.log('Microtask 1');
      Promise.resolve().then(() => {
        console.log('Microtask 2');
      });
    });
  }, 0);
  
  Promise.resolve().then(() => {
    console.log('Microtask 3');
  });
  
  console.log('Main Task');

  // 10 Mixing Promise Resolution with Delays

console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
  setTimeout(() => {
    console.log('Timeout 2');
  }, 0);
  return Promise.resolve();
}).then(() => {
  console.log('Promise 2');
});

console.log('End');

// 11 Deeply Nested Promises in a Timer

setTimeout(() => {
    console.log('Timer 1');
    Promise.resolve().then(() => {
      console.log('Microtask 1');
      Promise.resolve().then(() => {
        console.log('Microtask 2');
      });
    });
  }, 0);
  
  Promise.resolve().then(() => {
    console.log('Microtask 3');
  });
  
  console.log('Main Task');

  // 12 Combining Chained Promises and Timer Nesting

console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
  Promise.resolve().then(() => {
    console.log('Promise 1');
  }).then(() => {
    console.log('Promise 2');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 3');
  setTimeout(() => {
    console.log('Timeout 2');
  }, 0);
  return Promise.resolve();
}).then(() => {
  console.log('Promise 4');
});

console.log('End');

// 13
var a = 10;
function test() {
 console.log('Above', a);
  var a = 11;
  console.log('inner a', a);
}
test();
console.log(a);

