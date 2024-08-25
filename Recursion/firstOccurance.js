function firstOccurrence(arr, findMe) {
    // while (currentIndex < arr.length) {
    //     if (arr[currentIndex] === findMe) {
    //         return currentIndex;
    //     }
    //     currentIndex += 1;
    // }
    // return -1;
    return arr.indexOf(findMe);
}

console.log("firstOccurrence ::", firstOccurrence([1, 2, 3, 4, 5, 7, 8, 6, 9], 1));
