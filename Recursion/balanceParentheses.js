function balanceParentheses(arr) {
    let stack = [];
    let opening = ["{", "(", "["];
    let closing = ["}", ")", "]"];
    let matching = {
        "}": "{",
        "]": "[",
        ")": "(",
    };

    for (let i = 0; i < arr.length; i++) {
        if (opening.includes(arr[i])) {
            stack.push(arr[i]);
        } else if (closing.includes(arr[i])) {
            let value = stack.pop();
            if (value !== matching[arr[i]]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log("Result ::", balanceParentheses(["{", "(", "[", "]", ")", "}"]));
