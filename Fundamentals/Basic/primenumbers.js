function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime
    if (num === 2) return true; // 2 is the only even prime number
    if (num % 2 === 0) return false; // Skip even numbers greater than 2

    for (let i = 3; i <= Math.sqrt(num); i += 2) { // Check odd numbers up to √num
        if (num % i === 0) {
            return false; // If divisible, not prime
        }
    }
    return true;
}

// Example usage
const userInput = 11;
console.log(`Is ${userInput} a prime number?`, isPrime(userInput));
