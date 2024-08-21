function factorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log("Factorial ::", factorial(2));


// 
// n = 0 => return 1
// n = 1 * 1 - 1 => 1 * 1 => return 1
// n = 2 * 2 - 1 => 2 * 1 => return 2
// n = 3 * 3 - 1 => 3 * 2 => return 6
// n = 4 * 4 - 1 => 4 * 6 => return 24
// n = 5 * 5 - 1 => 5 * 24 => return 120