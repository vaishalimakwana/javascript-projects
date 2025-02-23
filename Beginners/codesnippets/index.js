const datetime = new Date();

console.log(datetime);


// 2
const numbers = [5.6,8,9,11];

const maxNum = Math.max(...numbers);
console.log(maxNum);

// 3
function shuffleArray(array){
	return array.sort(() => Math.random() - 0.5);

}
console.log(shuffleArray([1, 2, 2, 2, 3, 5, 4, 6])); 

// 4 
const randomNum = Math.floor(Math.random() * 10 + 1);
console.log(randomNum);

// 5
const str = "Hello World!";

const lowercase = str.toLowerCase();

console.log(lowercase);