let nums = [[7, 2, 1], [6, 4, 2], [6, 5, 3], [3, 2, 1]];
// let nums = [[7]];

const output = sumOfMatrix(nums, nums[0].length, 0);

function sumOfMatrix(data, len, count) {
    if (len === 0) {
        return count;
    } else {
        let arr = [];
        for (let i = 0; i < data.length; i++) {
            const highest = checkHighest(data[i]);
            arr.push(highest);
            let index = data[i].indexOf(highest)
            data[i].splice(index, 1);
        }
        console.log('arr:- ', checkHighest(arr));

        count += checkHighest(arr);
        return sumOfMatrix(data, --len, count)
    }
}

function checkHighest(data) {
    let max = data[0];
    let left = 1, right = data.length - 1;
    while (left <= right) {
        if (max < data[left]) {
            max = data[left];
        }
        if (max < data[right]) {
            max = data[right];
        }
        left++;
        right--;
    }
    return max;
}