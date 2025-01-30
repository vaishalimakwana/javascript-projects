// #Problem 1: Identifying Primitive and Reference Types
let a = 42; // number
let b = 'hello'; // string
let c = true; // boolean
let d = null; // object Null is technically an object (this is a known JavaScript quirk)
let e = undefined; // undefined
let f = Symbol('foo'); // symbol

let obj = { name: 'Alice' }; // object
let arr = [1, 2, 3]; // object

console.log(typeof a);  // What will this log?
console.log(typeof b);  // What will this log?
console.log(typeof c);  // What will this log?
console.log(typeof d);  // What will this log?
console.log(typeof e);  // What will this log?
console.log(typeof f);  // What will this log?

console.log(typeof obj); // What will this log?
console.log(typeof arr); // What will this log?

// Primitive types include: Number, String, Boolean, Symbol, null, undefined.
// Reference types include: Object, Array, Function, etc.

// #Problem 2: Checking Type Using typeof and instanceof
let num = 100;
let str = "JavaScript";
let bool = false;
let obj = { name: 'Alice' };
let arr = [1, 2, 3];

console.log(typeof num === 'number');   // What will this log?
console.log(typeof str === 'string');   // What will this log?
console.log(typeof bool === 'boolean'); // What will this log?

console.log(obj instanceof Object);  // What will this log? // obj is an instance of Object
console.log(arr instanceof Array);   // What will this log? // arr is an instance of Array
console.log(arr instanceof Object);  // What will this log? // arr is also an instance of Object (arrays are objects) 

// #Problem 3: null vs undefined
let a;
let b = null;

console.log(typeof a);  // What will this log? //undefined
console.log(typeof b);  // What will this log? // object // b is null, but typeof null returns 'object' due to a JavaScript quirk
console.log(a === b);   // What will this log? // false // a (undefined) is not equal to b (null)

// #Problem 4: Primitive vs. Reference Types Assignment
let a = 10;
let b = a;
b = 20;

let obj1 = { name: 'Alice' };
let obj2 = obj1;
obj2.name = 'Bob';

console.log(a);        // What will this log?  // a is still 10 because primitives are copied by value
console.log(b);        // What will this log?  // b was reassigned to 20, but it does not affect a
console.log(obj1.name);  // What will this log? // obj1 and obj2 point to the same object, so changing obj2 affects obj1
console.log(obj2.name);  // What will this log? // obj2 points to the same object as obj1, so both reflect the change

// #Problem 5: Immutability of Primitive and Reference Types
const x = 10;
const y = { name: 'Alice' };

x = 20;          // Will this work?
y.name = 'Bob';  // Will this work?

console.log(x);  // What will this log? // TypeError: Assignment to constant variable.
console.log(y);  // What will this log? // // y.name has been modified because the object is mutable

// #Problem 6: Type Conversion
let x = '5';
let y = 10;

console.log(x + y);  // What will this log? // '5' (string) is concatenated with 10 (number), so result is '510'
console.log(Number(x) + y); // What will this log? // Number(x) converts '5' to 5, and then adds it to 10
console.log(+x + y);  // What will this log?  // +x is shorthand for Number(x), which converts '5' to 5, and adds it to 10

// #Problem 7: String Coercion
console.log(1 + "2");          // "12" (Number coerced to String)
console.log(true + " is true"); // "true is true" (Boolean coerced to String)
console.log([1, 2] + "3");     // "1,23" (Array coerced to String)
console.log(null + " is null"); // "null is null" (Null coerced to String)

// #Problem 8: Number Coercion
console.log("5" - 1);          // 4 (String coerced to Number)
console.log(true + 2);         // 3 (Boolean coerced to Number: true = 1)
console.log(null + 3);         // 3 (Null coerced to 0)
console.log("text" * 3);       // NaN (Invalid String coerced to NaN)
console.log([] - 1);           // -1 (Empty array coerced to 0)
console.log([1, 2] - 1);       // NaN (Array coerced to NaN)

// #Problem 9: Boolean Coercion
console.log(Boolean(0));        // false (0 is falsy)
console.log(Boolean("Hello"));  // true (Non-empty string is truthy)
console.log(Boolean(null));     // false (Null is falsy)
console.log(Boolean({}));       // true (Empty object is truthy)
console.log(!"");               // true (Negated empty string is truthy)
