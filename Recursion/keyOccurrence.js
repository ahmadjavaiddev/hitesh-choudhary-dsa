function keyOccurrence(arr, num) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count = count + 1;
        }
    }
    return count;
}

console.log("Result ::", keyOccurrence([5, 1, 2, 5], 5));
