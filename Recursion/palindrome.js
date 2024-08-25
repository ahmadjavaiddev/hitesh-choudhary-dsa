function palindrome(string) {
    // let result = string.split("").reverse().join("");
    // if (string === result) {
    //     return true;
    // }

    // return false;

    let result = "";
    for (let i = 0; i < string.length; i++) {
        result = string[i] + result;
    }
    if (result === string) {
        return true;
    }
    return false;
}

console.log("Result ::", palindrome("madam"));
