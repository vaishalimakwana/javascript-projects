// 1.

(function(){
	var a = b = 3;
})();


console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

// 2.

var myObject = {

	foo: "bar",
	func: function (){
	var self = this;
	console.log("Outer func: this.foo = " + this.foo);
	console.log("Outer func: self.foo = " + self.foo);
        (function(){
		console.log("Inner func: this.foo = " + this.foo);
		console.log("Inner func: self.foo = " + self.foo);
	}());
	}
};

myObject.func();

// 3
for (var i = 0; i < 5 ; i++){
	var btn = document.createElement('Button');
	btn.appendChild(document.createTextNode('Button' + i));
	btn.addEventListener('click', function(){console.log(i);});
	document.body.appendChild(btn);
}

// 4
for (let i = 0; i < 5 ; i++){
	var btn = document.createElement('Button');
	btn.appendChild(document.createTextNode('Button' + i));
	btn.addEventListener('click', function(){console.log(i);});
	document.body.appendChild(btn);
}
// 5
for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', (function(i) {
    return function() { console.log(i); };
    })(i));
    document.body.appendChild(btn);
    }

// 6
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log('Arr1', arr1);
console.log('Arr2', arr2);
console.log('Arr3', arr3);
console.log("Arr 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("Arr 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// 7 
function sum(x){
	if(arguments.length == 2){
	return arguments[0] + arguments[1];
	}
	else{
	return function(y){ return x + y;};
	}

}

console.log(sum(2,3));
console.log(sum (2)(3));

// 8
function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase(); // Removes non-word characters and lowers case
    return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome('Level'));   // true
console.log(isPalindrome('Levels'));  // false
console.log(isPalindrome('A man, a plan, a canal, Panama')); // true
console.log(isPalindrome('No lemon, no melon!')); // true

// 9
const isPalindrome = s => s.toLowerCase() === [...s.toLowerCase()].reverse().join('');

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("Madam"));   // true

// 10
const isPalindrome = s => {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters
    return s === [...s].reverse().join('');
};

// Test Cases
console.log(isPalindrome("racecar"));   // true
console.log(isPalindrome("hello"));     // false
console.log(isPalindrome("Madam"));     // true
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("No lemon, no melon!")); // true

// 11
var y = 1, x = y = typeof x;
 
console.log(y);
console.log(x);
// Assignments in JavaScript are evaluated right to left.
// typeof never throws an error for an undeclared variable; it returns "undefined".
// x = y = typeof x; first assigns "undefined" to y, then assigns y to x.

// 12
var a = (2, 3, 5);
console.log(a);

// 13
var y = 1;
if (function f(){}) {
y += typeof f;
}
console.log(y);

// 13
(function() {
	'use strict';
	var a = window.b = 5;
	})();
	console.log(b);

// 14
function test() {
	console.log(a);
	console.log(foo());
	var a = 1;
	function foo() {
	return 2;
	}
	}
	test();

// 15 Strings are immutable
const str = "Jack";

// Create a new string with 'M' at the first position
const newStr = 'M' + str.slice(1);

console.log(newStr);  // Output: "Mack"	

// Convert arr to obj
const arr = ['a','b','c'];

let toobj = arr.reduce((acc,itr, i) => ({
	...acc,[i]:itr})
  ,{})
  
 let toobj1 = {...arr};
console.log(toobj);
console.log(toobj1);
console.log(typeof(toobj));
console.log(typeof(toobj1));