let nums = [1, 12, -5, -6, 50, 3], k = 4;
let count = 0;
for (let i = 0; i < k; i++) {
    count += nums[i];
}
let average = count / 4;
for (let j = 1; j <= nums.length - k; j++) {
    count = count - nums[j - 1] + nums[j - 1 + k];
    average = Math.max(average, (count / 4))
}
console.log('average:- ', average);
