function implementLength(string) {
    let length = 0;
    let temp = string;
    while (temp) {
        length = length + 1;
        temp = temp.substring(1);
    }
    return length;
}

console.log("Result ::", implementLength("Hello"));
