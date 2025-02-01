// any number divisible by 1 or itself is a prime number
function checkPrime(num) {
    if (num <= 1) {
        console.log(num, "is not a Prime Number");
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(num, "is not a Prime Number");
            return;
        }
    }

    console.log(num, "is a Prime Number");
}

// Example usage:
checkPrime(1);   // ❌ 1 is not a Prime Number
checkPrime(10);  // ❌ 10 is not a Prime Number
checkPrime(7);   // ✅ 7 is a Prime Number
checkPrime(29);  // ✅ 29 is a Prime Number
checkPrime(101); // ✅ 101 is a Prime Number
