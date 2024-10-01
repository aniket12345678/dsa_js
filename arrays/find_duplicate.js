let nums = [1, 3, 4, 2, 2];
let hashMap = new Map();
let i = 0;
while (i < nums.length) {
    if (hashMap.has(nums[i])) {
        return nums[i];
    }
    hashMap.set(nums[i], i);
    i++;
}