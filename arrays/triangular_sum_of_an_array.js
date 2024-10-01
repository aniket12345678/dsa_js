let nums = [1, 2, 3, 4, 5];
// let nums = [3, 5, 7, 9];

function triangularSum(data) {
    if (data.length === 1) {
        return data;
    }
    else {
        let i = 0, emptyArr = [];
        while (i < data.length - 1) {
            emptyArr.push((data[i] + data[i + 1]) % 10)
            i++;
        }
        return triangularSum(emptyArr);
    }
}

const output = triangularSum(nums);
console.log('output:- ', output);
