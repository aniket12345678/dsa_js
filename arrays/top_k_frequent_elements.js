// let nums = [1, 1, 1, 2, 2, 3].sort((a, b) => a - b), k = 2;
let nums = [4, 1, -1, 2, -1, 2, 3].sort((a, b) => a - b), k = 2;

let output = nums.reduce((acc, curr) => {
    if (!acc[curr]) {
        acc[curr] = 0;
    }
    acc[curr] += 1;
    return acc;
}, {});

console.log(output);


let newArr = Object.values(output).sort((a, b) => b - a).slice(0, 2);
let arr = [];

for (const key in output) {
    if (newArr.includes(output[key])) {
        arr.push(Number(key));
    }
}

console.log(arr);
