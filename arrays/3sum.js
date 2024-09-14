let nums = [-1, 0, 1, 2, -1, -4].sort((a, b) => a - b);

let store = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
        let target = nums[i] < 0 ? Math.abs(nums[i]) : 0 - nums[i];
        let j = i + 1, k = nums.length - 1;
        while (j < k) {
            if (nums[j] + nums[k] === target) {
                store.push([nums[i], nums[j], nums[k]])
                while (nums[j] == nums[j + 1]) ++j
                while (nums[k] == nums[k - 1]) --k
                ++j;
                --k
            }
            else if (nums[j] + nums[k] < target) {
                ++j;
            } else {
                --k;
            }
        }
    }
}
console.log(store);