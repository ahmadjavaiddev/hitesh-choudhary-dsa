function removeAdjDuplicate(value) {
    let result = "";
    for (let i = 0; i < value.length; i++) {
        if (value[i] !== value[i + 1]) {
            result += value[i];
        }
    }
    return result;
}

console.log("Result ::", removeAdjDuplicate("Heellloo"));
