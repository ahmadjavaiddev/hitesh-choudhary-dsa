function reverseString(str) {
    const string = str.trim().split("").reverse().join("");
    return string;
}

console.log(reverseString("Hello"));
