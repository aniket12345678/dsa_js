let rolls = [3, 2, 4, 3], mean = 4, n = 2;

let remainingSum = (mean * (n + rolls.length)) - rolls.reduce((acc, curr) => acc + curr, 0);

// console.log(remainingSum);

let store = [];

for (let j = 0; j < n; j++) {
    let k = ''
    for (let i = 1; i <= 6; i++) {
        if (remainingSum - i <= 6) {
            console.log(12 - i);
        }
    }

}


console.log(store);