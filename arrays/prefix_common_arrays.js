// let A = [1, 3, 2, 4], B = [3, 1, 2, 4];
let A = [2, 3, 1], B = [3, 1, 2];

function findThePrefixCommonArray(A, B) {
    let prefix = [];
    for (let i = 0; i < A.length; i++) {
        prefix.push(findCommon(A.slice(0, i + 1), B.slice(0, i + 1)));
    }
    return prefix;
}

function findCommon(a, b) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        let left = 0, right = b.length - 1;
        while (left <= right) {
            if (a[i] === b[left] || a[i] === b[right]) {
                count++;
            }
            left++;
            right--;
        }
    }
    return count;
}

const output = findThePrefixCommonArray(A, B);
console.log(output);
