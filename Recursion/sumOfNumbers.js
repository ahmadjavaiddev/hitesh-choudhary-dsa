// function sumOfNumbers(...numbers) {
//     return numbers.reduce((accu, curr) => {
//         return accu + curr;
//     }, 0);
// }

// console.log("sumOfNumbers ::", sumOfNumbers(1, 2, 3, 4, 5, 6, 7));

function sumNumber(num) {
    if (num === 0) {
        return num;
    }

    return num + sumNumber(num - 1);
}

console.log("sumNumber ::", sumNumber(3));
