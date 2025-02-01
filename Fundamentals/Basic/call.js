const person = {name: "Tom"};

function greet(age, city){
	console.log(`Hello, my name is ${this.name}, I am ${age} years old and I live in ${city}`)


}
// Using call() to set 'this' to 'person' and passing arguments separately
greet.call(person,25,"Mumbai");



// Apply
const person = {name: "Tom"};

function greet(age, city){
	console.log(`Hello, my name is ${this.name}, I am ${age} years old and I live in ${city}`)


}
// 👉 Similar to call(), but arguments are passed as an array.
greet.apply(person,[25,"Mumbai"]);

// 👉 Returns a new function with a specific this value, but does not call it immediately.
const bindGreet = greet.bind(person, 25, "Mumbai"); // Binds but does NOT execute

bindGreet();

function fullName(please){
	console.log( please + " " + person1.firstName + " " + person1.lastName);
}


const person1 = {
	firstName: "Tom",
	lastName: "Matthew"
};

fullName.call(person1, "Please to have to you");
