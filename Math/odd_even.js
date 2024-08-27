function oddEven(n) {
    return (n ^ 1) === (n + 1);
}

const output = oddEven(18);
console.log('output:- ', output);