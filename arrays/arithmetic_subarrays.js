let nums = [4, 6, 5, 9, 3, 7], l = [0, 0, 2], r = [2, 3, 5];

let store = [];
for (let i = 0; i < l.length; i++) {
    const output = arithmetic(nums.slice(l[i], r[i] + 1).sort((a,b) => a-b));
    store.push(output);
}

console.log(store);


function arithmetic(data) {
    let diff = data[0] - data[1];
    for (let i = 1; i < data.length - 1; i++) {
        if (data[i+1] - data[i] !== data[1] - data[0]) {
            return false;
        }
    }
    return true;
}