// 1. Reverse a String
function revStr(str){

const reverseStr = str.split('').reverse().join('');

return reverseStr;

}
console.log(revStr('Hello'));

// 2. Check for Palindrome
function checkPalindrome(str){
const isPalin = str.split('').reverse().join('');
return isPalin === str;

}
console.log(checkPalindrome('Hello'));

// 3. Find the First Non-Repeated Character

function firstNonRepeatedChar(str) {

    const charCount = {}; // this is a hashmap object
    
    for(let char of str){
    
    charCount[char] = ((charCount[char] || 0) + 1);
    
    }
    
    for(let char of str){
    if(charCount[char] === 1){
    return char;}
    
    }
    
    return null;
    
    }
    console.log(firstNonRepeatedChar('Vaishali'));
    console.log(firstNonRepeatedChar("swiss"));  // Output: "w"
    console.log(firstNonRepeatedChar("racecars")); // Output: "e"
    console.log(firstNonRepeatedChar("aabbcc")); // Output: null (all are repeated)

    // 3 Factorial of 5
    function findFactorial(num){
        let factorial = 1;
        
          for(let i = 1; i<= num; i++){
             factorial *= i;
              
          }
        
        
         console.log(factorial);
        }
        console.log(findFactorial(5));

// 4. FizzBuzz
function fizzBuzz(n){

 const arr = [];

	for(let i = 1; i<= n; i++){
		if(i%15 === 0){
			arr.push('FizzBuzz')
		}
		else if(i%3 === 0){
			arr.push('Fizz')
		}
		else if(i%5 === 0){
			arr.push('Buzz')
		}
		else arr.push(i.toString())
	}
	return arr
}

console.log(fizzBuzz(15));        