// #1
var a = { name: 'UST', age: 17 };
var b = a;
b.age = 18;
console.log(a.age); // b is assigned the same reference as a, so modifying b.age also affects a.age.

// #2
var a = { name: 'UST', age: 17 };
var b = { ...a }; // { ...a } creates a shallow copy of a, meaning b gets a separate copy.
b.age = 18; // Modifying b.age does not affect a.age.
console.log(a.age);

// #3
let obj1 = { name: "UST", details: { age: 17 } };
let obj2 = { ...obj1 }; // Shallow copy

obj2.name = "Updated";
obj2.details.age = 18;

console.log(obj1.name);       // "UST"  (not affected)
console.log(obj1.details.age); // 18  (affected!)

// obj2 is a new object ({}), so obj1.name is copied independently.
// But details is a nested object, so the reference to details is copied, not the actual object.
// Modifying obj2.details.age also affects obj1.details.age, because both obj1 and obj2 share the same reference to the details object.