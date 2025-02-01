// 1. Named Function Expression
const greet = function sayHello(name) {
    return `Hello, ${name}!`;
};

console.log(greet("Vaishali")); // Hello, Vaishali!
// console.log(sayHello("Vaishali")); // Error: sayHello is not defined (only available inside itself)

// 2. Anonymous Function Expression
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("Vaishali")); // Hello, Vaishali!

// 3. Arrow Function Expression (ES6)
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Vaishali")); // Hello, Vaishali!
//  If there's only one parameter, you can omit parentheses. 
// 🔹 If there's only one return statement, you can omit {} and return.

// 4. Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("IIFE executed!");
})(); 
// OR
(() => {
    console.log("IIFE executed with arrow function!");
})();

// 5. Function Expression inside an Object (Method)
const person = {
    greet: function(name) {
        return `Hello, ${name}!`;
    }
};

console.log(person.greet("Vaishali")); // Hello, Vaishali!
// OR as arrow functions // 🔹 Methods inside objects can also use arrow functions:
const person = {
    greet: (name) => `Hello, ${name}!`
}; // 🔹 Be cautious! Arrow functions do not have their own this, which affects object methods.

// 6. Function Expression as a Callback 
// 🔹 Often used in event listeners, setTimeout, array methods like map/filter/reduce.
const process = function(callback) {
    callback();
};

process(function() {
    console.log("Callback executed!");
}); 

// 7. Function Expression in Higher-Order Functions
const createMultiplier = function(multiplier) {
    return function(num) {
        return num * multiplier;
    };
};

const double = createMultiplier(2);
console.log(double(5)); // 10