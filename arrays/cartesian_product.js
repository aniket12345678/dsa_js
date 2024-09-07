let obj = {
    '1': '',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
    '10': '',
}

let digits = "23";
let first = obj[digits[0]], second = obj[digits[1]];
let empty = [];
for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
        empty = [...empty, [first[i] + second[j]]]
    }
}


// console.log(empty);


function cartesian(counter) {
    if (counter === 1) {
        return counter;
    } else {
        console.log(counter);
        return cartesian(--counter);
    }
}

const output = cartesian(6);
console.log('output:- ', output);
