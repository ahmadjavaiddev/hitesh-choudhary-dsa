// function isVowel(char) {
//     return "aeiouAEIOU".includes(char);
// }

// function vowelCount(string) {
//     let vowels = {};

//     for (let i = 0; i < string.length; i++) {
//         if (isVowel(string[i])) {
//             if (vowels[string[i]]) {
//                 vowels[string[i]] += 1;
//             } else {
//                 vowels[string[i]] = 1;
//             }
//         }
//     }

//     return vowels;
// }

// console.log("Vowels ::", vowelCount("Hello"));

function isVowel(char) {
    return "aeiouAEIOU".includes(char);
}

function vowelCount(string) {
    let vowels = {};

    for (let char of string) {
        if (isVowel(char)) {
            vowels[char] = (vowels[char] || 0) + 1;
        }
    }

    return vowels;
}

console.log("Vowels ::", vowelCount("Hello"));
