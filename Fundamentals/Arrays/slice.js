const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruitsnew = fruits.slice(); // new array from existing array without reference
// At position 2, add "Lemon" and "Kiwi"
fruitsnew.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits);
console.log(fruitsnew);