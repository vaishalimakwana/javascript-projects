// #Problem 1
// console.log(a);  
// var a = 10;
// function test() {
//     console.log(b);
//     var b = 20;
// }
// test();


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
// console.log(x);
// let x = 10;
// console.log(y);
// const y = 20;

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