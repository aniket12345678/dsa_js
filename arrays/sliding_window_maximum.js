let nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3;
let emptyArr = [];
for (let i = 0; i < k; i++) {
    emptyArr.push(nums[i]);
}
let max = [Math.max(...emptyArr)];
for (let i = 1; i <= nums.length - k; i++) {
    emptyArr.splice(0, 1);
    emptyArr.splice(emptyArr.length, 0, nums[i - 1 + k]);
    max.push(Math.max(...emptyArr))
}
console.log('max:- ', max);