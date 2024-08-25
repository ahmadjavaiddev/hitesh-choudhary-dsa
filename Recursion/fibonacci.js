function fibonacci(length) {
    // let values = [0, 1];
    // for (let i = 2; i < length; i++) {
    //     values.push(values[i - 2] + values[i - 1]);
    //     console.log(values);
    // }

    let n0 = 0;
    let n1 = 1;
    for (let i = 0; i < length; i++) {
        temp = n0 + n1;
        n0 = n1;
        n1 = temp;
    }
    return n0;
}

console.log(fibonacci(6));
