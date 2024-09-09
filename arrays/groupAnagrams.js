let strs = ["act", "pots", "tops", "cat", "stop", "hat"];

let obj = {};

for (let i = 0; i < strs.length; i++) {
    let sortedStr = Array.from(strs[i]).sort().join('');
    if (!obj[sortedStr]) {
        obj[sortedStr] = [];
    }
    obj[sortedStr].push(strs[i]);
}

console.log(Object.values(obj));