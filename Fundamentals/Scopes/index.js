// # 1: Scope of var, let, and const
function test() {
    if (true) {
        var x = 10;
        let y = 20;
        const z = 30;
    }
    console.log(x);
    console.log(y);
    console.log(z);
}
test();

// #2: Re-assigning values using var, let, and const
var a = 1;
let b = 2;
const c = 3;

a = 4;
b = 5;
c = 6;

console.log(a); // What will this print?
console.log(b); // What will this print?
console.log(c); // What will this print? -  TypeError: Assignment to constant variable.

// #3: Hoisting
console.log(x); // What will this log?
console.log(y); // What will this log?
console.log(z); // What will this log?

var x = 10;
let y = 20; // ReferenceError: y is not defined
const z = 30;

// #4: Block Scopes
if (true) {
    let a = 1;
    const b = 2;
    console.log(a); // What will this log?
    console.log(b); // What will this log?
}

console.log(a); // What will this log?
console.log(b); // What will this log?

// #4: Answer 
// 1
// 2
// ReferenceError: a is not defined
// ReferenceError: b is not defined

// #5: Immutability of const with objects
const person = { name: 'Alice' };
person.name = 'Bob'; // const can be modified
person = { name: 'Charlie' }; // const cannot be re-assigned

console.log(person);

// #6: Temporal Dead Zone with let and const
function test() {
    console.log(x); // What will this log? undefined
    console.log(y); // What will this log? temporal dead zone

    var x = 10;
    let y = 20;
}

test();
