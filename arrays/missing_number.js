let nums = [3, 0, 1];

function findMissing(data) {
    for (let i = 0; i < data.length; i++) {
        if (i !== data[i]) {
            return i;
        }
    }
}

const output = findMissing(nums.sort((a, b) => a - b));
console.log(output);
