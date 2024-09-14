// let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
let temperatures = [73, 74, 75, 71, 69, 72, 76, 81];
let stack = [];

for (let i = 0; i < temperatures.length; i++) {
    let limit = temperatures[i];
    let count = 0;
    for (let j = i + 1; j < temperatures.length; j++) {
        count++;
        if (limit < temperatures[j]) {
            break;
        }
        if (j == temperatures.length - 1) {
            count = 0
        }
    }
    stack.push(count);
}

console.log('stack:- ', stack);
