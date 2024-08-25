function powerOfNumber(base, exp) {
    if (exp === 0) {
        return 1;
    }
    return base * powerOfNumber(base, exp - 1);
}

console.log("Result ::", powerOfNumber(2, 3));
