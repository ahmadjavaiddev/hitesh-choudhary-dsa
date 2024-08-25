function removeSpacesAndTabs(string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (char !== " " && char !== "\t") {
            result += char;
        }
    }
    return result;
}

console.log(removeSpacesAndTabs("Hello World!    , New User Is Here :: \t John Snow"));
